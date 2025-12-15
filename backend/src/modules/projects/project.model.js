const mongoose = require('mongoose')
const { ProjectCategory } = require('../../config/constant.config')

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    tech: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    features: {
        type: [String],
        required: true
    },
    achievements: {
        type: [String],
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: [...Object.values(ProjectCategory)]
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    liveLink: {
        type: String,
        required: true
    },
    caseStudyLink: {
        type: String,
        required: true
    },
},{
    timestamps:true,
    autoIndex:true,
    autoCreate:true,
})

const projectModel = mongoose.model('project', projectSchema)
module.exports = projectModel