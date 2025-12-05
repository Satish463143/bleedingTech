const Joi = require('joi')
const contactDTO = Joi.object ({
    name: Joi.string().min(2).max(100).required().trim(),
    email: Joi.string().email().required().trim(),
    phone: Joi.string().min(10).max(13).required().trim(),
    message: Joi.string().min(10).max(1000).required().trim(),

})

module.exports = contactDTO