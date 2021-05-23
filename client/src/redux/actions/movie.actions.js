import * as types from '../constants/movie.constants';
import { toast } from 'react-toastify';
import api from '../api';

const getAll = (pageNum, perPage, query) => async (dispatch) => {
  try {
    dispatch({ type: types.FETCH_START });
    let data = { data: {} };
    if (query) {
      data.data = await api.get(
        `/movies?pageNum=${pageNum}&perPage=${perPage}&title=${query}`
      );
      dispatch({ type: types.FETCH_SUCCESS, payload: data.data });
    } else {
      data.data = await api.get(
        `/movies?pageNum=${pageNum}&perPage=${perPage}`
      );
      dispatch({ type: types.FETCH_SUCCESS, payload: data.data });
    }
  } catch (error) {
    dispatch({ type: types.FETCH_FAILURE });
    console.log({ error });
  }
};

const CreateMovie = (movie) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_MOVIE_START });
    const { data } = await api.post('/movies', movie);
    toast.success('Movie is created successfully');
    dispatch({ type: types.CREATE_MOVIE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.CREATE_MOVIE_FAILURE });
    toast.danger(error);
  }
};

const update = (movie) => async (dispatch) => {
  try {
    dispatch({ type: types.UPDATE_MOVIE_START });
    const { data } = await api.patch(`/movies/${movie._id}`, movie);
    toast.success('Movie is updated successfully');
    dispatch({ type: types.UPDATE_MOVIE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.UPDATE_MOVIE_FAILURE });
  }
};

const deleteMovie = (movie) => async (dispatch) => {
  try {
    dispatch({ type: types.DELETE_MOVIE_START });
    const { data } = await api.delete(`/movies/${movie._id}`);
    toast.success('Movie is deleted successfully');
    dispatch({ type: types.DELETE_MOVIE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.DELETE_MOVIE_FAILURE });
    console.log({ error });
  }
};

const movieActions = {
  getAll,
  CreateMovie,
  update,
  deleteMovie,
};

export { movieActions };
