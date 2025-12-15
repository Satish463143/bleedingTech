const joi = require('joi')

const projectDTO = joi.object({
    title: joi.string().required(),
    subtitle: joi.string().required(),
    image: joi.string().required(),
    tech: joi.array().items(joi.string()).required(),
    description: joi.string().required(),
    features: joi.array().items(joi.string()).required(),
    achievements: joi.array().items(joi.string()).required(),
    category: joi.string().required(),
    isFeatured: joi.boolean().required(),
    liveLink: joi.string().required(),
    caseStudyLink: joi.string().required(),
})

module.exports = projectDTO