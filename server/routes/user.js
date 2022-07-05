const express = require('express')
const { catchErrors } = require('../middleware/error')
const router = express.Router()
const user = require('../controllers/user')

router.post('/login', user.login)
router.post('/register', catchErrors(user.register))
// router.post('/googlelogin', user.googleLogin)
router.get('/loggedIn', user.loggedIn)
router.get('/logout',user.logout)

module.exports = router