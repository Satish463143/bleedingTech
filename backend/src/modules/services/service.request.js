const joi = require('joi')

const serviceDTO = joi.object({
    icon: joi.string().required(),
    title: joi.string().required(),
    description: joi.string().required(),
    fullDesc: joi.string().required(),
    features: joi.array().items(joi.string()).required(),
})

module.exports = serviceDTO