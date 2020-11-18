const quizzesService = require('../services/quizzes.services.server')

module.exports =  function quizzesController (app) {

    app.get('/api/quizzes', (req, res) => res.json(quizzesService.findAllQuizzes()))
    app.get('/api/quizzes/:qid', (req, res) => res.json(
        quizzesService.findQuizById(req.params['qid'])))


}

