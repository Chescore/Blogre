const {Category} = require('../models/category')

exports.getAllCategories = async(req,res) => {
    try{
        const categories = await Category.find()
        res.send(categories)
    }catch(err){
        console.log(err.message)
    }
}

exports.createCategory = async(req,res) => {
    try{
        const {category} = req.body;

        const nameRegex = /^[A-Za-z\s]+$/;
        if(!nameRegex.test(category)) return res.status(400).send('Should be alphabetical')

        const existingCategory = await Category.findOne({category});
        if(existingCategory) return res.status(400).send('Category already exists');

        const newCategory = new Category({
            category
        })

        await newCategory.save()

        res.json({
            category
        })
    }catch(err){
        console.log(err.message)
    }
}

exports.getCategory = async(req,res) => {
    try{
        const category = await Category.findById(req.params.id)
        
        res.send(category)
    }catch(err){
        console.log(err.message)
    }
}