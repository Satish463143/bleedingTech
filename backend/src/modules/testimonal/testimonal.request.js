const Joi = require('joi')
const { ProjectCategory } = require('../../config/constant.config')

const testimonalDTO = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    role: Joi.string().min(3).max(50).required(),
    company: Joi.string().min(3).max(50).required(),
    image: Joi.string().required(),
    review: Joi.string().required(),
    rating: Joi.number().required(),
    category: Joi.string().valid(...Object.values(ProjectCategory)).required(),}).unknown(false)

module.exports = testimonalDTO