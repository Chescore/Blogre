const express = require('express')
const { catchErrors } = require('../middleware/error')
const router = express.Router()
const category = require('../controllers/category')

router.get('/categories',catchErrors(category.getAllCategories))
router.post('/categories',catchErrors(category.createCategory))
router.get('/categories/:id',catchErrors(category.getCategory))

module.exports = router