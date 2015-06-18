var express = require('express');
var router = express.Router();

/*MTD Se a�ade un nuevo controlador*/
var quizController = require ('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

/*MTD Introducir dos nuevas vistas */
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

/*MTD Introducir dos nueva p�gina */

router.get('/author', function(req, res, next) {
  res.render('author', {author: 'Mickey Mouse'});
});

module.exports = router;
