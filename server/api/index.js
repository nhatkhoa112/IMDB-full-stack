const express = require('express');
const router = express.Router();

const usersRouter = require('./users.api');
router.use('/users', usersRouter);

const moviesRouter = require('./movies.api');
router.use('/movies', moviesRouter);

const reviewsRouter = require('./reviews.api');
router.use('/reviews', reviewsRouter);

module.exports = router;
