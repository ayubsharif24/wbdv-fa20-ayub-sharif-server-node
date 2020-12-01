const mongoose = require('mongoose')
const quizzesSchema = require('./quizzes.schema.server')
const quizzesModel = mongoose.model(
    'Quiz Model',
    quizzesSchema
)

module.exports = quizzesModel;
