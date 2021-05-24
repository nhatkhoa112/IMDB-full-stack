const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = Schema(
  {
    body: {
      type: String,

      required: true,

      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,

      ref: 'User',

      required: true,
    },
    movieId: {
      type: mongoose.Schema.Types.ObjectId,

      ref: 'Movie',

      required: true,
    },
  },

  { timestamps: true }
);

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
