const mongoose = require('mongoose')
const questionSchema = require('../questions/questions.schema.server')
const quizAttempts = mongoose.Schema({
                                         score: Number,
                                         quiz: {
                                             _id: '',
                                             type: mongoose.Schema.Types.String,
                                             ref: 'Quizzes Model'},
                                         answers: [questionSchema],
                                      }, {collection: 'quizAttempts'})
module.exports = quizAttempts
