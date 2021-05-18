import * as types from "../constants/movie.constants";

const initialState = {
  movies: [],
  loading: false
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_START:
    case types.FETCH_SUCCESS:
    case types.FETCH_FAILURE:
    default:
      return state;
  }
};

export default movieReducer;
