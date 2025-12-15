
require("dotenv").config();
const jwt = require("jsonwebtoken")
const  UserModel = require ("../modules/user/user.model");
const verifyToken = async(req, res,next)=>{
    try{
        const authHeader = req.headers['authorization']
        let token = null;
        
        // Check for token in headers first
        if (authHeader) {
            token = authHeader.split(" ")[1];
        }
        // If no token in headers, check cookies
        else if (req.cookies && req.cookies.token) {
            token = req.cookies.token;
        }
        
        if (!token) throw {status:401, message:"Authorization token missing"}
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await UserModel.findById(decoded.sub)

        if(!user || user.token !== token) throw {status:401, message:"Inavlid or Expired token"}
        req.user = user
        next()
    }catch(exception){
        console.log('not match token',exception)
        next(exception)
    }
}

module.exports = verifyToken
