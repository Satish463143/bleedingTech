const mongoose = require('mongoose')
const caseStudiesSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    heroImage: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    teamSize: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    challenge: {
        type: [String],
        required: true
    },
    solution: {
        type: [String],
        required: true
    },
    results: {
        type: [{
            metric: {
                type: String,
                required: true
            },
            label: {
                type: String,
                required: true
            }
        }]
    },
    technologies: {
        type: [String],
        required: true
    },
    testimonial: {
        quote: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: true
        }
    }
},{
    timestamps: true,
    autoIndex: true,
    autoCreate: true,
})
const CaseStudiesModel = mongoose.model('CaseStudies', caseStudiesSchema)
module.exports = CaseStudiesModel