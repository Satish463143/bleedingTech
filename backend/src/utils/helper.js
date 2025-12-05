const fs = require('fs')

const randomStringGenerator = (length) => {
    const char = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const leng = char.length;
    let random = ""
    for (let i = 0; i < length; i++) {
        const posn = Math.ceil(Math.random()* (leng-1))
        random +=char[posn]
    }
    return random

}

const deleteFile = (path) =>{
    if(fs.existsSync(path)){
        fs.unlinkSync(path)
    }
}
module.exports = {
    randomStringGenerator,
    deleteFile
}