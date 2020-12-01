const mongoose = require('mongoose')
const quizAttemptSchema = require('./quiz-attempts.schema.server')

const quizAttemptModel = mongoose.model(
    'Quiz Attempt Model',
    quizAttemptSchema
)

module.exports = quizAttemptModel
