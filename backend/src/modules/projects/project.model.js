const mongoose = require('mongoose')
const { ProjectCategory, isFeatued } = require('../../config/constant.config')

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
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
        type: String,
        enum: [...Object.values(isFeatued)],
        required: true        
    },
    liveLink: {
        type: String,
    },
    caseStudyLink: {
        type: String,
    },
},{
    timestamps:true,
    autoIndex:true,
    autoCreate:true,
})

const projectModel = mongoose.model('project', projectSchema)
module.exports = projectModel