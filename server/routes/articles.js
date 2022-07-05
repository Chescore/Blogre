const express = require('express');
const router = express.Router()

const { catchErrors } = require('../middleware/error')
const article = require('../controllers/articles')
const {auth} = require('../middleware/auth')

router.get('/',catchErrors(article.getAllArticles))
router.post('/',auth,catchErrors(article.createArticle))
router.get('/profile',auth,catchErrors(article.getUserProfile))
router.patch('/likes',auth, catchErrors(article.likeArticle))
router.get('/comments',catchErrors(article.getComments))
router.patch('/comments',auth ,catchErrors(article.commentArticle))
router.get('/profile/:id',catchErrors(article.getOtherUserProfile))
router.delete('/profile/article/:id',auth ,catchErrors(article.deleteArticle))
router.patch('/profile/article/:id',auth ,catchErrors(article.updateArticle))
router.get('/:id',catchErrors(article.getArticle))

module.exports = router;