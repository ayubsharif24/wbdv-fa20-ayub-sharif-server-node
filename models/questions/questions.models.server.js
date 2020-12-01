const mongoose = require('mongoose')
const questionsSchema = require('./questions.schema.server')
const questionsModel = mongoose.model(
    'Questions Model',
    questionsSchema
)

module.exports = questionsModel
