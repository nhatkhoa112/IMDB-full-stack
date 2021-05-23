import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import movieReducer from './movie.reducer';
import reviewReducer from './review.reducer.js';

export default combineReducers({
  user: userReducer,
  movie: movieReducer,
  review: reviewReducer,
});
