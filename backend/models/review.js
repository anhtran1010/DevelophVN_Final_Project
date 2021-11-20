import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema ({
  username: {
    type: String,
    require: true,
    ref: 'users'
  },
  StarRating: {
    type: Number,
    require: 1 <= Number <= 5,
  },
  Review: {
    type: String,
  }
})

const review = mongoose.model('review', reviewSchema);

module.exports = review;

  