const UserModel = require("../user/user.model")
class AuthService{
    getSingleUserByFilter = async (filter) => {
        try{
            return await UserModel.findOne(filter).lean()
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }   

}
module.exports = new AuthService()