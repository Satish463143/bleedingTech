const joi = require('joi')

const serviceDTO = joi.object({
    icon: joi.string().required(),
    title: joi.string().required(),
    description: joi.string().required(),
    fullDesc: joi.string().required(),
    features: joi.alternatives().try(
        joi.array().items(joi.string()),
        joi.string()
    ).required(),
})

module.exports = serviceDTO