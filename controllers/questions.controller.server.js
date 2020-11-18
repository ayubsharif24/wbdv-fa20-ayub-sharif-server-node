const questionsService = require('../services/questions.service.server')

module.exports =  function questionsController (app) {

    app.get('/api/questions', (req, res) => res.json(
        questionsService.findAllQuestions()))
    app.get('/api/questions/:qid', (req, res) => res.json(
        questionsService.findQuestionById(req.params['qid'])
    ))
    app.get('/api/quizzes/:qid/questions', (req, res) => res.json(
        questionsService.findQuestionsForQuiz(req.params['qid'])))
}
