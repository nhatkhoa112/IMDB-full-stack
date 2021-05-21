import * as types from '../constants/user.constants';

import api from '../api';

const register = (user) => async (dispatch) => {
  try {
    dispatch({ type: types.REGISTER_REQUEST });
    const { data } = await api.post('/users', user);
    dispatch({ type: types.REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE });
    console.log({ error });
  }
};

const login = (user) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_REQUEST });
    const { data } = await api.post('/users/login', user);
    dispatch({ type: types.LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE });
    console.log({ error });
  }
};

const signOut = () => async (dispatch) => {
  dispatch({type: types.SIGN_OUT});
};

const authActions = {
  register,
  login,
};

export { authActions };
