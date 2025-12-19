const Joi = require('joi')

const resultsSchema = Joi.object({
    metric: Joi.string().required(),
    label: Joi.string().required()
})

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
    results: Joi.array().items(resultsSchema).min(1).required(),
    challenge: Joi.array().items(Joi.string()).required(),
    solution: Joi.array().items(Joi.string()).required(),
    technologies: Joi.array().items(Joi.string()).required(),
    testimonialQuote: Joi.string().required(),
    testimonialAuthor: Joi.string().required(),
    testimonialRole: Joi.string().required(),
    testimonialAvatar: Joi.string().required()
})

module.exports = caseStudiesDTO