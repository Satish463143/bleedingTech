const mongoose = require('mongoose')
const { isFeatued } = require('../../config/constant.config')

const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    heroImage: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    readTime: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    isFeatured: {
        type: String,
        enum: [...Object.values(isFeatued)],
        required: true        
    },
    authorName: {
        type: String,
        required: true
    },
    authorBio: {    
        type: String,
        required: true
    },
    authorAvatar: {
        type: String,
        default: null
    },
    authorRole: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

const BlogsModel = mongoose.model('Blogs', blogsSchema)
module.exports = BlogsModel

