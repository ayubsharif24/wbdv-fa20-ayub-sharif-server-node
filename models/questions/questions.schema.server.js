const mongoose = require('mongoose')
const questionsSchema = mongoose.Schema({
    _id: String,
    title: String,
    quizId: String,
    question: String,
    correct: String,
    type: String,
    choices: Array
}, {collection: 'questions'})
module.exports = questionsSchema
