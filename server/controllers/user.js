const {User} = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const {OAuth2Client} = require('google-auth-library')

const client = new OAuth2Client("325429714633-r5a1rkk8g3hm56gemlkp0a82boh40dlj.apps.googleusercontent.com")

exports.register = async(req,res)=>{
    try{
        const {username,email,password,passwordConfirmation} = req.body

        const emailRegex = /@gmail.com|@yahoo.com|hotmail.com|@live.com/
        if(!emailRegex.test(email)) return res.status(400).send('Invalid email address')

        if(password!==passwordConfirmation) return res.status(400).send('The passwords dont match. Try again!')

        const encryptedPassword = await bcrypt.hash(password, 10)
        
        const existingUsername = await User.findOne({username})
        if(existingUsername) return res.status(400).send('Username is already in use')
    
        const existingEmail = await User.findOne({email})
        if(existingEmail) return res.status(400).send('Email is already registered')

        const user = new User({
            username,
            email,
            password:encryptedPassword,
            passwordConfirmation:encryptedPassword
        })

        await user.save()
        const token = user.generateAuthToken()
        user.token = token;

        res.cookie('token',token,{
            httpOnly:true
        }).send()

        const transport = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            port:process.env.MAIL_PORT,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        })

        await transport.sendMail({
            from:process.env.FROM,
            to:email,
            subject:'Welcome to Blogre!',
            html:"<p>Create and read articles of your own choosing</p>"
        })
        
    }catch(err){
        console.log(err.message)
    }
}

exports.login = async(req,res)=>{
    const {email,password} = req.body

    const user = await User.findOne({email})

    try{    
        if(user&&(await bcrypt.compareSync(password,user.password))){
            const token = user.generateAuthToken()
            user.token = token
            res.cookie('token',token,{
                httpOnly:true
            }).send()
        }
    }catch(err){
        if(!user) return res.status(400).send('User not yet registered');

        res.status(404).json({message:err.message})
    }
}

exports.loggedIn = (req,res)=>{
    const token = req.cookies.token
    if(!token) return res.send(false);
        
    jwt.verify(token,process.env.TOKEN_KEY)
        
    res.send(true)
}

exports.logout = (req,res)=>{
    res.cookie('token','',{
        httpOnly:true,
        expires:new Date(0)
    }).send()
}

// exports.googleLogin = (req,res)=>{
//     const {tokenId} = req.body;

//     client.verifyIdToken({idToken:tokenId,audience:"325429714633-r5a1rkk8g3hm56gemlkp0a82boh40dlj.apps.googleusercontent.com"}).then(response => {
//         const {email_verified, email} = response.payload
//         console.log(email)
//         if(email.verified){
//             const user = User.findOne({email:email})
//             if(user){
//                 const token = user.generateAuthToken()
//                 user.token = token
//                 res.cookie('token',token,{
//                     httpOnly:true
//                 }).send()
//             }else{
//                return res.status(400).send("User doesn't exist")
//             }
//         }
//     })
// }