const mongoose = require('mongoose')

const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
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
        type: Boolean,
        required: true
    },
    author: {
       name: {
        type: String,
        required: true
       },
       bio: {    
        type: String,
        required: true
       },
       avatar: {
        type: String,
        required: true
       },
       role: {
        type: String,
        required: true
       }
    },
    content: {
        type: String,
        required: true
    }
})
const BlogsModel = mongoose.model('Blogs', blogsSchema)
module.exports = BlogsModel