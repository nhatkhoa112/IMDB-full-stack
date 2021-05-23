const types = require('../constants/review.constants');

const initialState = {
  review: [],
  loading: false,
};

const reviewReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_REVIEWS_START:
      return { ...state, loading: true };
    case types.GET_REVIEWS_SUCCESS:
      return { ...state, loading: false, reviews: payload.data };
    case types.GET_REVIEWS_FAILURE:
      return { ...state, loading: false };

    case types.CREATE_REVIEW_START:
      return { ...state, loading: true };
    case types.CREATE_REVIEW_SUCCESS:
      return { ...state, loading: false };
    case types.CREATE_REVIEW_FAILURE:
      return { ...state, loading: false };

    case types.UPDATE_REVIEW_START:
      return { ...state, loading: true };
    case types.UPDATE_REVIEW_SUCCESS:
      return { ...state, loading: false };
    case types.UPDATE_REVIEW_FAILURE:
      return { ...state, loading: false };
    case types.DELETE_REVIEW_START:
      return { ...state, loading: true };
    case types.DELETE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.DELETE_REVIEW_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

module.exports = reviewReducer;
