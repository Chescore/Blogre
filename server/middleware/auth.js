const jwt = require('jsonwebtoken')

const auth = (req,res,next)=>{
    const token = req.headers['x-access-token'];
    if(token){
        jwt.verify(token,process.env.TOKEN_KEY,(err,decoded)=>{
            if(err) return res.status(401).json({message:'Unauthorized'})
            req.user={};
            req.user=decoded
            next()
        })
    }else{
        res.status(401).json({message:'Unauthorized'})
    }
}

exports.auth = auth