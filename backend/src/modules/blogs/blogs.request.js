const joi = require('joi')

const blogsDTO = joi.object({
    title: joi.string().required(),
    subtitle: joi.string().required(),
    excerpt: joi.string().required(),
    thumbnail: joi.string().required(),
    heroImage: joi.string().required(),
    category: joi.string().required(),
    tags: joi.array().items(joi.string()).required(),
    date: joi.date().required(),
    readTime: joi.string().required(),
    isFeatured: joi.boolean().required(),
    author: joi.string().required(),
    content: joi.string().required(),
})

module.exports = blogsDTO