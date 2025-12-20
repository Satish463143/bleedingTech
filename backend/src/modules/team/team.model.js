const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [50, 'Name must be less than 50 characters long'],
        required: [true, 'Name is required'],
    },
    position:{
        type:String,
        minlength: [3, 'Position must be at least 3 characters long'],
        maxlength: [50, 'Position must be less than 50 characters long'],
        required: [true, 'Position is required'],
    },
    tagline:{
        type:String,
        minlength: [3, 'Tagline must be at least 3 characters long'],
        maxlength: [250, 'Tagline must be less than 250 characters long'],
        required: [true, 'Tagline is required'],
    },
    image:{
        type:String,
        required: [true, 'Image is required'],
    },
    email:{
        type:String,
        default: '',
    },
    github:{
        type:String,
        default: '',
    },
    linkedin:{
        type:String,
        default: '',
    },
    instagram:{
        type:String,
        default: '',
    }
    
}, { timestamps: true,
    autoIndex: true,
    autoCreate: true,
})

const teamModel = mongoose.model('Team', teamSchema)
module.exports = teamModel