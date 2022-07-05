const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { number } = require('joi')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    googleId:{
        type:String
    },
    followers:{
        type:Number,
        default:0
    },
    articles:{
        type:Number,
        default:0
    },
    bio:{
        type:String
    },
    profile_photo:{
        type:String,
    }

})

userSchema.methods.generateAuthToken=function(){
    const token = jwt.sign({id:this._id,username:this.username,email:this.email},process.env.TOKEN_KEY)
    return token
}

const User = mongoose.model('users', userSchema)

exports.User = User
