require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { createLogger, transports } = require('winston');
const log = require('npmlog');

const errorHandlers = require('./middleware/error')
const categories = require('./routes/category')
const articles = require('./routes/articles')
const users = require('./routes/user')

createLogger({
    level:'info',
    exceptionHandlers:[
        new transports.File({filename:'exceptions.log'}),
    ],
    rejectionHandlers:[
        new transports.File({filename:'rejections.log'})
    ]
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))

app.use(errorHandlers.mongooseErrors);
if(process.ENV==='development'){
    app.use(errorHandlers.developmentErrors)
}else{
    app.use(errorHandlers.productionErrors)
}

app.use('/',users)
app.use('/',categories)
app.use('/',articles)

mongoose.connect(process.env.MONGODB_URI)
        .then(log.info('Connected to MongoDB'))

const PORT = process.env.PORT

app.listen(PORT,()=>{
    log.info('Listening to port ' + PORT)
})