const express = require('express');
const router = express.Router();
const { loginRequired } = require('../middlewares/loginRequired');
const movieController = require('../controllers/movies.controller');

// GET http://localhost:5000/api/movies
router.get('/', loginRequired, movieController.list);
router.get('/search', loginRequired, movieController.searchByTitle);
router.post('/', loginRequired, movieController.create);
router.patch('/:id', loginRequired, movieController.update);
router.delete('/:id', loginRequired, movieController.delete);

module.exports = router;
