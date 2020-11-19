const quizzes = require('./quizzes.json')

const findAllQuizzes = () => quizzes;
const findQuizById = (id) => quizzes.find(
    quiz => quiz._id === id)

module.exports = {
    findAllQuizzes,
    findQuizById
}
