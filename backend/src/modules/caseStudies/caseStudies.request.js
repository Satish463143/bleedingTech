const Joi = require('joi')

const caseStudiesDTO = Joi.object({
    projectName: Joi.string().required(),
    companyName: Joi.string().required(),
    tagline: Joi.string().required(),
    image: Joi.string().required(),
    heroImage: Joi.string().required(),
    logo: Joi.string().required(),
    category: Joi.string().required(),
    industry: Joi.string().required(),
    duration: Joi.string().required(),
    teamSize: Joi.string().required(),
    year: Joi.string().required(),
    overview: Joi.string().required(),
    challenge: Joi.array().items(Joi.string()).required(),
    solution: Joi.array().items(Joi.string()).required(),
    results: Joi.array().items(Joi.object({
        metric: Joi.string().required(),
        label: Joi.string().required()
    })).required(),
    technologies: Joi.array().items(Joi.string()).required(),
    testimonial: Joi.object({
        quote: Joi.string().required(),
        author: Joi.string().required(),
        role: Joi.string().required(),
        avatar: Joi.string().required()
    }).required()
})

module.exports = caseStudiesDTO