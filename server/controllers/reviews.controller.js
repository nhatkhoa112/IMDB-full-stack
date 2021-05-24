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
    let review = await new Review();
    review.body = newReview.body;
    review.userId = mongoose.Types.ObjectId(newReview.userId);
    review.movieId = mongoose.Types.ObjectId(newReview.movieId);
    review._id = new mongoose.Types.ObjectId();
    review.save();
    res.status(200).json({
      success: false,
      data: review,
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

reviewController.delete = catchAsync(async (req, res, next) => {
  try {
    const id = req.params.id;

    const review = await Review.findByIdAndDelete(id);
    if (!review) throw Error;
    sendResponse(
      res,
      201,
      true,
      { review },
      null,
      'The review is delete successfully'
    );
  } catch (error) {
    res.status(400).json({
      success: false,

      error: 'Review not found!',
    });
  }
});

module.exports = reviewController;
