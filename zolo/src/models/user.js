const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    

    manager:{

        type:Boolean,
        required:true,
        default:false
    },

    name : {
        type:String,
        required:true,
        trim:true

    },
    email :{
        type:String,
        unique: true,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("EMail Is invalid")
            }
        }


        
    },
    password:{
        type:String,
        required:true,
        trim:true
    },

    //List of auth tokens
    tokens: [{
        token:{
            type:String,
            required:true
        }
    }
    ]
    
},
{ toJSON: { virtuals: true } }
)

userSchema.virtual('reveiws',{
    ref:'reveiw',
    localField:'_id',
    foreignField:'owner'
})

//Disallows display of password and tokens in res if user is returned
userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}


userSchema.methods.generateAuthToken = async function(){
    const user = this

    
    const token = jwt.sign({_id : user._id.toString()}, 'zolo')
    user.tokens = user.tokens.concat({token})
  //  console.log(token)
    await user.save()
    return token
}

userSchema.statics.findCredentials = async (email,password) => {

    const user = await User.findOne({email})
    

    if(!user)
    {
       throw new Error('Login Failed')
    }
    
    const isMatch = await bcrypt.compare(password,user.password)
    console.log("YOO")
    

    if(!isMatch)
    {
        throw new Error('Login Failed')
    }

    

    return user
  

}

//Middleware Hashes password before saving model
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User =  mongoose.model('User', userSchema)

module.exports = User