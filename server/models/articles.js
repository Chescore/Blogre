const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    categoryId:{
        type:mongoose.Schema.Types.ObjectId
    },
    categoryName:{
        type:String,
        required:true
    },
    creatorId:{
        type:mongoose.Schema.Types.ObjectId
    },
    creatorName:{
        type:String
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String
    },
    tags:{
        type:[String]
    },
    fileUpload:{
        type:String
    },
    likes:{
        type:Number,
        default:0
    },
    noOfComments:{
        type:Number,
        default:0
    },
    userComments:{
        type:String
    },
    timestamp:{
        type:String
    }   
})

const Articles = mongoose.model('articles',articleSchema)

exports.Articles = Articles