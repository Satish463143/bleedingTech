const Joi = require('joi')

const teamDTO = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    position: Joi.string().min(3).max(50).required(),
    tagline: Joi.string().min(3).max(250).required(),
    image: Joi.string().required(),
    social: Joi.array().items(Joi.object({
        github: Joi.string().required(),
        linkedin: Joi.string().required(),
        instagram: Joi.string().required(),
        email: Joi.string().required(),
    })).required(),
})

module.exports = teamDTO