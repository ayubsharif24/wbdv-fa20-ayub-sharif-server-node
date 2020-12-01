const quizzesModel = require('../../models/quizzes/quizzes.models.server')

const findAllQuizzes = () => quizzesModel.find()
const findQuizById = (quizId) => quizzesModel.find(quizId)

module.exports = {findAllQuizzes, findQuizById}
