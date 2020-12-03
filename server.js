var bodyParser = require('body-parser')
const express = require('express')
const app = express()



const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dbUser:dbUserPassword@cluster0.c1s1o.mongodb.net/whiteboard?retryWrites=true&w=majority',
                 { useNewUrlParser: true, useUnifiedTopology: true})

mongoose.Promise = global.Promise

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});



const quizzesController = require('./controllers/quizzes.controller.server')
const questionsController = require('./controllers/questions.controller.server')
const quizAttemptController  = require('./controllers/quiz-attemps-controller.server')

quizzesController(app);
questionsController(app);
quizAttemptController(app);

app.listen(process.env.PORT)
// app.listen(3000)
