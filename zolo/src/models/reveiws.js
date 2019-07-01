const mongoose = require('mongoose')


const reveiwSchema = new mongoose.Schema({
   
  stars: {
      type: Number
  },

  description: {

    type:String
  },

  owner:{

    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'User'
  },

  forProperty:{

    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'property'
  }



})

const reveiw = mongoose.model('reveiw',reveiwSchema)

module.exports = reveiw 