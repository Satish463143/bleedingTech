const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    icon: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fullDesc: {
        type: String,
        required: true
    },
    features: {
        type: [String],
        required: true
    }
}, {timestamps:true,
    autoIndex:true,
    autoCreate:true,
})

const serviceModel = mongoose.model('service', serviceSchema)
module.exports = serviceModel