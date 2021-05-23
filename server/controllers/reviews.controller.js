const Review = require('../models/Review');
const {
  AppError,
  catchAsync,
  sendResponse,
} = require('../helpers/utils.helper');
var mongoose = require('mongoose');

const reviewController = {};

reviewController.create = catchAsync(async (req, res, next) => {
  try {
    let newReview = req.body;

    const review = await new Review({ body, userId, movieId });
    
    review.save();
    res.status(200).json({
      success: false,
      data: newReview,
      message: 'The new review is created successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
});
reviewController.list = catchAsync(async (req, res, next) => {
  try {
    const reviews = await Review.find({}).sort({ _id: -1 });
    res.status(200).json({
      success: true,
      data: reviews,
      message: 'Here is your reviews',
    });
  } catch (error) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
});

reviewController.update = catchAsync(async (req, res, next) => {});

reviewController.delete = catchAsync(async (req, res, next) => {});

module.exports = reviewController;
