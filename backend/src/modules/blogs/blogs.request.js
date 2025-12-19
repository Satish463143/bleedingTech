const joi = require('joi')
const { isFeatued } = require('../../config/constant.config')

const blogsDTO = joi.object({
    title: joi.string().required(),
    subtitle: joi.string().required(),
    excerpt: joi.string().required(),
    thumbnail: joi.string().required(),
    heroImage: joi.string().required(),
    category: joi.string().required(),
    tags: joi.alternatives().try(
        joi.array().items(joi.string()),
        joi.string()
    ).required(),
    date: joi.date().required(),
    readTime: joi.string().required(),
    isFeatured: joi.string().valid(...Object.values(isFeatued)).required(),    
    authorName: joi.string().required(),
    authorBio: joi.string().required(),
    authorRole: joi.string().required(),
    authorAvatar: joi.string().optional().allow(null),
    content: joi.string().required(),
})

module.exports = blogsDTO