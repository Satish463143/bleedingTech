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
    challenge: Joi.alternatives().try(
        Joi.array().items(Joi.string()),
        Joi.string()
    ).required(),
    solution: Joi.alternatives().try(
        Joi.array().items(Joi.string()),
        Joi.string()
    ).required(),
    technologies: Joi.alternatives().try(
        Joi.array().items(Joi.string()),
        Joi.string()
    ).required(),
    testimonialQuote: Joi.string().required(),
    testimonialAuthor: Joi.string().required(),
    testimonialRole: Joi.string().required(),
    testimonialAvatar: Joi.string().required()
})

module.exports = caseStudiesDTO