// const quizzesService = require('../services/quiz.service.server')
const quizzesDao = require('../daos/quizzes/quizzes.dao.server')

module.exports =  function quizzesController (app) {

    app.get('/api/quizzes', (req, res) =>
        quizzesDao.findAllQuizzes()
            .then(allQuizzes => res.json(allQuizzes)))
    app.get('/api/quizzes/:qid', (req, res) =>
        quizzesDao.findQuizById(req.params['qid'])
            .then(quiz => res.json(quiz)))

    // app.get('/api/quizzes', (req, res) => res.json(quizzesService.findAllQuizzes()))
    // app.get('/api/quizzes/:qid', (req, res) => res.json(
    //     quizzesService.findQuizById(req.params['qid'])))

}

