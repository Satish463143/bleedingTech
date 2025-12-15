const loginCheck = require("../../middleware/auth.middleware")
const {bodyvalidator} = require('../../middleware/validator.middleware')
const authController = require("./auth.controller")
const { LoginDTO } = require("./auth.request")
const verifyToken = require ("../../middleware/validateToken.middleware")
const multer = require('multer');
const upload = multer();


const authRouter = require("express").Router()



authRouter.post("/login",upload.none(), bodyvalidator(LoginDTO), authController.login)
authRouter.get("/me",loginCheck,verifyToken, authController.getLoggedInUser)
authRouter.get("/refresh",authController.refreshToken)
authRouter.post("/logout",verifyToken, authController.logout)



module.exports = authRouter