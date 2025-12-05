require("dotenv").config()
const http = require("http");
const app = require("./src/config/epress.config");

const server = http.createServer(app)

const port = process.env.PORT || 3000

server.listen(port, 'localhost', (error)=>{
    if(error){
        console.log("Error while running port")
        document.write("Server is running")
    }
    else{
        console.log("Server is listening on Port:" ,port)
        console.log("Press Ctrl+c to stop the server")
    }
})
