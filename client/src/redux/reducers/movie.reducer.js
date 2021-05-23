import * as types from '../constants/movie.constants';

const initialState = {
  movies: [],
  loading: false,
  movieCreated: {},
  updatedMovie: {},
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_START:
      return { ...state, loading: true };
    case types.FETCH_SUCCESS:
      return { ...state, loading: false, movies: payload.data };
    case types.FETCH_FAILURE:
      return { ...state, loading: false };

    case types.CREATE_MOVIE_START:
      return { ...state, loading: true };
    case types.CREATE_MOVIE_SUCCESS:
      return { ...state, loading: false, movieCreated: payload.data };
    case types.CREATE_MOVIE_FAILURE:
      return { ...state, loading: false };

    case types.UPDATE_MOVIE_START:
      return { ...state, loading: true };
    case types.UPDATE_MOVIE_SUCCESS:
      return { ...state, loading: false, updatedMovie: payload.data };
    case types.UPDATE_MOVIE_FAILURE:
      return { ...state, loading: false };
    case types.DELETE_MOVIE_START:
      return { ...state, loading: true };
    case types.DELETE_MOVIE_SUCCESS:
      console.log(payload.data.movie);
      state.movies.movies = state.movies.movies.filter(
        (m) => m._id !== payload.data.movie._id
      );

      return {
        ...state,
        loading: false,
        movies: { ...state.movies, movies: state.movies.movies },
      };
    case types.DELETE_MOVIE_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default movieReducer;
