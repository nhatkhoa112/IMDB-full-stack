const {
  AppError,
  catchAsync,
  sendResponse,
} = require('../helpers/utils.helper');

const Movie = require('../models/Movie');

const movieController = {};

movieController.create = catchAsync(async (req, res, next) => {
  try {
    const newMovie = req.body;
    const movie = await new Movie(newMovie);
    await movie.save();
    sendResponse(res, 201, true, { movie }, null, 'Here are your moviessss');
  } catch (error) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
});

movieController.list = catchAsync(async (req, res, next) => {
  const perPage = parseInt(req.query.perPage) || 20;
  const pageNum = parseInt(req.query.pageNum) || 1;
  const sort = req.query.sort;
  const replace = req.query.title;
  const re = new RegExp(replace, 'i');
  let movies;
  let moviesTotal;
  if (replace) {
    movies = await Movie.find({ title: { $regex: re } })
      .limit(perPage)
      .skip(pageNum > 0 ? (pageNum - 1) * perPage : 0);
    moviesTotal = await Movie.find({}).countDocuments();
    console.log(movies);
  } else {
    if (sort) {
      if (sort === 'avg_vote') {
        movies = await Movie.find({})
          .sort({ avg_vote: -1 })
          .limit(perPage)
          .skip(pageNum > 0 ? (pageNum - 1) * perPage : 0);
        moviesTotal = await Movie.find({}).countDocuments();
      }
      if (sort === 'votes') {
        movies = await Movie.find({})
          .sort({ votes: -1 })
          .limit(perPage)
          .skip(pageNum > 0 ? (pageNum - 1) * perPage : 0);
        moviesTotal = await Movie.find({}).countDocuments();
      }
    } else {
      movies = await Movie.find({})
        .limit(perPage)
        .skip(pageNum > 0 ? (pageNum - 1) * perPage : 0);
      moviesTotal = await Movie.find({}).countDocuments();
    }
  }
  sendResponse(
    res,
    201,
    true,
    { movies, moviesTotal },
    null,
    'Here are your moviessss'
  );
});

movieController.searchByTitle = catchAsync(async (req, res, next) => {
  const replace = req.query.title;
  const re = new RegExp(replace, 'i');
  const movies = await Movie.find({ title: { $regex: re } }).limit(20);
  sendResponse(res, 201, true, { movies }, null, 'Here are your moviessss');
});

movieController.update = catchAsync(async (req, res, next) => {
  try {
    const newMovie = req.body;
    const id = req.params.id;

    console.log(id);
    const movie = await Movie.findByIdAndUpdate(req.params.id, newMovie, {
      new: true,
    });
    movie.save();
    if (!movie) throw Error;
    sendResponse(
      res,
      201,
      true,
      { movie },
      null,
      'The movie is updated successfully'
    );
  } catch (error) {
    res.status(400).json({
      success: false,

      error: 'Movie not found!',
    });
  }
});

movieController.delete = catchAsync(async (req, res, next) => {
  try {
    const id = req.params.id;

    const movie = await Movie.findByIdAndDelete(id);
    if (!movie) throw Error;
    sendResponse(
      res,
      201,
      true,
      { movie },
      null,
      'The movie is delete successfully'
    );
  } catch (error) {
    res.status(400).json({
      success: false,

      error: 'Movie not found!',
    });
  }
});

module.exports = movieController;
