const joi = require('joi')
const { isFeatued ,ProjectCategory} = require('../../config/constant.config')

const projectDTO = joi.object({
    title: joi.string().required(),
    subtitle: joi.string().required(),
    image: joi.string().required(),
    tech: joi.alternatives().try(
        joi.array().items(joi.string()),
        joi.string()
    ).required(),
    description: joi.string().required(),
    features: joi.alternatives().try(
        joi.array().items(joi.string()),
        joi.string()
    ).required(),
    achievements: joi.alternatives().try(
        joi.array().items(joi.string()),
        joi.string()
    ).required(),
    category: joi.string().valid(...Object.values(ProjectCategory)).required(),
    isFeatured: joi.string().valid(...Object.values(isFeatued)).required(), 
    liveLink: joi.string().allow('').optional(),
    caseStudyLink: joi.string().allow('').optional(),
}).unknown(false)

module.exports = projectDTO