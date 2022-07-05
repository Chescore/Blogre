const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    category:String
})

const Category = mongoose.model('categories', categorySchema)

exports.Category = Category