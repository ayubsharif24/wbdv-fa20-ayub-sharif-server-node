const express = require('express')
const app = express()

const quizzesController = require('./controllers/quizzes.controller.server')
const questionsController = require('./controllers/questions.controller.server')
quizzesController(app);
questionsController(app);

app.listen(3000)
