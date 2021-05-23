const express = require('express');
const router = express.Router();
const { loginRequired } = require('../middlewares/loginRequired');
const reviewController = require('../controllers/reviews.controller');

// GET http://localhost:5000/api/movies
router.get('/', loginRequired, reviewController.list);
router.post('/', loginRequired, reviewController.create);
router.patch('/:id', loginRequired, reviewController.update);
router.delete('/:id', loginRequired, reviewController.delete);

module.exports = router;
