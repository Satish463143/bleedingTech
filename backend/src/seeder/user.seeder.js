const bcrypt = require("bcryptjs")
require("../config/db.config")
const UserModel = require("../modules/user/user.model")
 
const adminUser =[
    {
        name:"Bleeding Tech",
        email:"bleeding.tech@gmail.com",
        password: bcrypt.hashSync("@!Bleeeding@9565",10),
        role:'admin'
    }
]

const seedUser = async () => {
    try {
        // Use Promise.all to handle asynchronous mapping
        await Promise.all(
            adminUser.map(async (user) => {
                const userExisting = await UserModel.findOne({ email: user.email });
                if (!userExisting) {
                    const userObj = new UserModel(user);
                    await userObj.save();
                }
            })
        );
        process.exit(1)
    } catch (exception) {
        console.log(exception);
    }
};

seedUser()
