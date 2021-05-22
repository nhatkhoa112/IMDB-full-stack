import * as types from '../constants/movie.constants';

import api from '../api';

const getAll = () => async (dispatch) => {
  try {
    dispatch({ type: types.FETCH_START });
    const { data } = await api.get('/movies');
    dispatch({ type: types.FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.FETCH_FAILURE });
    console.log({ error });
  }
};

const movieActions = {
  getAll,
};

export { movieActions };
