const mongoose = require('mongoose')
const { ProjectCategory } = require('../../config/constant.config')

const testimonialSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [50, 'Name must be less than 50 characters long'],
        required: [true, 'Name is required'],
    },
    role:{
        type:String,
        minlength: [3, 'Position must be at least 3 characters long'],
        maxlength: [50, 'Position must be less than 50 characters long'],
        required: [true, 'Position is required'],
    },
    company:{
        type:String,
        minlength: [3, 'Tagline must be at least 3 characters long'],
        maxlength: [250, 'Tagline must be less than 250 characters long'],
        required: [true, 'Tagline is required'],
    },
    image:{
        type:String,
        required: [true, 'Image is required'],
    },
    review:{
        type:String,
        required: [true, 'Rating is required'],
    },
    rating:{
        type:Number,
        required: [true, 'Rating is required'],
    },
    category: {
        type: String,
        required: true,
        enum: [...Object.values(ProjectCategory)]
    },   
    
}, { timestamps: true,
    autoIndex: true,
    autoCreate: true,
})

const testimonialModel = mongoose.model('Testimonial', testimonialSchema)
module.exports = testimonialModel