// const questionsService = require('../services/questions.service.server')
const questionsDao = require('../daos/questions/questions.dao.server')

module.exports =  function questionsController (app) {

    app.get('/api/questions', (req, res) =>
        questionsDao.findAllQuestions()
            .then(allQuestions => res.json(allQuestions)))
    app.get('/api/questions/:qid', (req, res) =>
        questionsDao.findQuestionById(req.params['qid'])
            .then(question => res.json(question)))

    app.get('/api/quizzes/:qid/questions', (req, res) =>
        questionsDao.findQuestionsForQuiz(req.params['qid'])
            .then(questions => res.json(questions)))

    // app.get('/api/questions', (req, res) => res.json(
    //     questionsService.findAllQuestions()))
    // app.get('/api/questions/:qid', (req, res) => res.json(
    //     questionsService.findQuestionById(req.params['qid'])
    // ))
    // app.get('/api/quizzes/:qid/questions', (req, res) => res.json(
    //     questionsService.findQuestionsForQuiz(req.params['qid'])))
}
