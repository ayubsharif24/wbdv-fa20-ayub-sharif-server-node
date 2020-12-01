const questionsModel = require('../../models/questions/questions.models.server')
const quizzesModel = require('../../models/quizzes/quizzes.models.server')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.find(qid)
const findQuestionsForQuiz = (qzid) = quizzesModel.find(qzid)
    .populate('questions').then(quiz => quiz.questions)

module.exports = {findAllQuestions, findQuestionById, findQuestionsForQuiz}
