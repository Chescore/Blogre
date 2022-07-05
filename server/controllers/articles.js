const mongoose = require('mongoose')
const {Articles} = require('../models/articles')
const {Category} = require('../models/category')
const {User} = require('../models/user')

exports.getAllArticles = async(req,res)=>{
    try{
        const articles = await Articles.find()
        res.send(articles)
    }catch(err){
        console.log(err.message)
    }
}

exports.createArticle = async(req,res)=>{
    try{
        const {title,description,location,tags,fileUpload} = req.body

        const category = await Category.findOne({category:req.body.category})
        if(!category)return res.status(404).send('Such category does not exist')
        
        if(description.length<=200)return res.status(404).send('WEAK!! Should have at least 200 characters')

        const article = new Articles({
            categoryId:category.id,
            categoryName:category.category,
            creatorId:req.user.id,
            creatorName:req.user.username,
            title,
            description,
            location,
            tags,
            fileUpload,
            timeStamp:new Date()
        })
        await article.save()
        res.status(200).json(article)
    }catch(err){
        console.log(err.message)
    }
}

exports.getArticle = async(req,res)=>{
    try{
        const article = await Articles.findById(req.params.id)
        res.json(article)
    }catch(err){
        console.log(err.message)
    }
}

exports.getUserProfile = async(req,res)=>{
    try{
        const articles = await Articles.find({creatorId:req.user.id})
        if(!articles) return res.status(400).send('Profile does not exist')
        res.json(articles)
    }catch(err){
        console.log(err.message)
    }
}

exports.getOtherUserProfile = async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        if(!user) return res.status(400).send('No such profile does not exists')

        const articles = await Articles.find({'creator.userId':user._id})
        res.json(articles)
    }catch(err){
        console.log(err.message)
    }
}

exports.deleteArticle = async(req,res)=>{
    try{
        const article = await Articles.findByIdAndDelete(req.params.id)
        if(!article) return res.status(400).send('Invalid ID')
    }catch(err){
        console.log(err.message)
    }
}

exports.updateArticle = async(req,res)=>{
    try{
        const {title,description,location,tags,fileUpload} = req.body

        const article = await Articles.findByIdAndUpdate(req.params.id,{title,description,location,tags,fileUpload},{new:true})
        if(!article) return res.status(400).send('Invalid ID')

        res.json(article)
    }catch(err){
        console.log(err.message)
    }
}

exports.likeArticle = async(req,res)=>{
    try{
       
    }catch(err){
        console.log(err.message)
    }
}

exports.dislikeArticle = async(req,res)=>{
    try{
       
    }catch(err){
        console.log(err.message)
    }
}

exports.getComments = async(req,res)=>{
    try{

    }catch(err){
        console.log(err.message)
    }
}

exports.commentArticle = async(req,res)=>{
    try{

    }catch(err){
        console.log(err.message)
    }
}  