const { deleteFile } = require("../utils/helper")

const bodyvalidator = (schema)=>{
    return async (req,res, next)=>{
        try{
            const data = req.body
        if(req.file){
            console.log('DEBUG: req.file.filedname =', req.file.filedname)  // This will print: undefined
            console.log('DEBUG: req.file.fieldname =', req.file.fieldname)  // This will print: "image"
            console.log('DEBUG: Keys in data BEFORE fix:', Object.keys(data))
            // FIX: Changed filedname (typo) to fieldname (correct)
            data[req.file.fieldname] = req.file.filename || req.file.path
            console.log('DEBUG: Keys in data AFTER fix:', Object.keys(data))
        }
        await schema.validateAsync(data, {abortEarly: false})
        next()
        }catch(exception){
            const detail = {}

            if(exception.isJoi && exception.details){
                if(req.file){
                    deleteFile('./'+req.file.path)
                }
              // Map the validation errors to details object
              exception.details.map((error) => {
                console.log(error);
                detail[error["path"][0]] = error.message;
            });
        } else {
            // Handle other types of errors (e.g., unexpected errors)
            console.error(exception);
        }

        next({
            status: 400,
            details: Object.keys(detail).length > 0 ? detail : { error: 'An unknown error occurred' }
        });
    }
};
};

module.exports = {
bodyvalidator
};