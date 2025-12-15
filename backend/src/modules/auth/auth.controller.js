require("dotenv").config();
const authService = require("./auth.service")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const UserModel = require("../user/user.model")
const { signAccessToken, signRefreshToken, setAuthCookies,clearAuthCookies } = require("../../utils/token.helper")

class AuthController {

    login = async (req, res, next) => {
        try {
          const { email, password } = req.body;
    
          const user = await authService.getSingleUserByFilter({ email });
          if (!user) throw { status: 422, message: "Credentials do not match" };
    
          const ok = await bcrypt.compare(password, user.password || "");
          if (!ok) throw { status: 422, message: "Credentials do not match" };
    
          const token = signAccessToken(user);
          const refreshToken = signRefreshToken(user);
    
          await UserModel.findByIdAndUpdate(user._id, { token: token, refreshToken });
    
          // Set cookies here (moved from route)
          setAuthCookies(res, { accessToken: token, refreshToken });
    
          // You can still return the user; avoid returning tokens if you rely on cookies
          res.json({
            result: {
              userDetails: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
              },
            token: { token, refreshToken }
            },
            message: "Login successful",
            meta: null
          });
        } catch (exception) {
          next(exception);
        }
    };
    
    logout = async (req, res, next) => {
        try {
          const userId = req.user?._id;
          if (userId) {
            await UserModel.findByIdAndUpdate(userId, { token: null, refreshToken: null });
          }
          clearAuthCookies(res);
          res.json({ result: null, message: "Logout successful", meta: null });
        } catch (exception) {
          next(exception);
        }
      };

    getLoggedInUser= (req, res,next)=>{
        try{
            res.json({
                result:req.authUser,
                message:"Your profile",
                meta:null
            })

        }catch(exception){
            next(exception)
        }
    }
    refreshToken= async(req,res,next)=>{
        try{
            let token = req.headers['authorization'] || null;
            if (!token) {
                throw { status: 401, message: "Unauthorized access: Token not provided" };
            }

            token = token.split(" ").pop();
            const {sub, type} = jwt.verify(token,process.env.JWT_SECRET);
            if(!type || type !== 'refresh'){
                throw{status:401, message:"Refresh token is required"}
            }

            await authService.getSingleUserByFilter({
                _id: sub
            });

            const accessToken = jwt.sign({
                sub: sub

                    },process.env.JWT_SECRET,
                    // {
                    //     expiresIn:"1 day",
                    //     algorithm:
                    // }
                )
            const refreshToken = jwt.sign({
                sub:sub,
                type:"refersh"

            },process.env.JWT_SECRET,
            {
                expiresIn:"2 day",
            }
            )
            res.json({
                result:{
                    token:accessToken,
                    refreshToken:refreshToken
                },
                messaage:"Token refresh",
                meta:null
            })

        }catch(exception){
            next(exception)
        }
    }

}
module.exports = new AuthController