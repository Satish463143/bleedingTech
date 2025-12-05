const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URL,{
    dbName:process.env.DB_NAME,
    autoCreate:true,
    autoIndex:true,
    
}).then(()=>{
    console.log("Database connected sucessfully")
}).catch((error)=>{
    console.log("Error while connecting to database",error)
})

module.exports = mongoose;