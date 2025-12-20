const Joi = require('joi')

const teamDTO = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    position: Joi.string().min(3).max(50).required(),
    tagline: Joi.string().min(3).max(250).required(),
    image: Joi.string().required(),
    github: Joi.string().allow('').optional(),
    linkedin: Joi.string().allow('').optional(),
    instagram: Joi.string().allow('').optional(),
    email: Joi.string().allow('', null).optional(),
}).unknown(false)

module.exports = teamDTO