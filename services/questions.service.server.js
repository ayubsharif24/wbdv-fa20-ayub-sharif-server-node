const questions = require('./questions.json')

const findAllQuestions = () => questions;
const findQuestionById = (id) => questions.find(question => question._id === id)
const findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId)

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}
