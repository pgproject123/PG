const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const propertySchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true
    },

    location: {
        type: String,
        trim:true
    },

    address: {
        type: String,
        trim:true
    },

    gender: {
        type: String,
        trim:true
    },

    roomtypes: {
        type: String,
        trim:true
    },

    //Types of room vacancies i.e. room with only one capacity is vacancy1 with 2 capacity is vacancy2

    //rent specified is for vacnacy1 type substract by multiple of vacancy type to get rent of other rooms
    rent: {
        type:Number

    },

    vacancy1: {
        type: Number,
        default:0
    },

    vacancy2: {
        type: Number,
        default:0
    },

    vacancy3: {
        type: Number,
        default:0
    },

    vacancy4: {
        type: Number,
        default:0
    },

    //facilities

    AC: {
        type: Boolean,
        default: false
    },

    fan: {
        type:Boolean,
        default:true
    },

    fridge:{
        type:Boolean,
        default:false
    },

    wifi:{
        type:Boolean,
        default:true
    },

    //WIFI speeds and service provider information
    wifides: {
        type:String
    },

    wardrobe:{
        type:Boolean,
        default:true
    },

    security:{
        type:Boolean,
        default:true
    },

    powerbackup:{
        type:Boolean,
        default:true
    },

    //DEscribes amount of time power backup works at its capacity
    powerbackupdes: {
        type:String
    },

    geyser:{
        type:Boolean,
        default:true
    },

    //b_image list has property image
    b_image: [{

            type: Buffer
        
    }]



},

//tojson option given to schema helps me to convert the reveiws to Json when i use execpopulate
{ toJSON: { virtuals: true } }   )

propertySchema.virtual('reveiws',{
    ref:'reveiw',
    localField:'_id',
     foreignField:'forProperty'   
})



const property = mongoose.model('property',propertySchema)

module.exports = property