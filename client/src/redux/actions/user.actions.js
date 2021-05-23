import * as types from '../constants/user.constants';
import { toast } from 'react-toastify';
import api from '../api';

const register = (user) => async (dispatch) => {
  try {
    dispatch({ type: types.REGISTER_REQUEST });
    const { data } = await api.post('/users', user);
    toast.success('The user is registered successfully');
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
    toast.success('The user is logined successfully');
    dispatch({ type: types.LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE });
    console.log({ error });
  }
};

const update = (id, user) => async (dispatch) => {
  try {
    dispatch({ type: types.UPDATE_REQUEST });
    const { data } = await api.patch(`/users/${id}`, user);
    toast.success('The user is updated successfully');
    dispatch({ type: types.UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.UPDATE_FAILURE });
    console.log({ error });
  }
};

const signOut = () => async (dispatch) => {
  dispatch({ type: types.SIGN_OUT });
};

const authActions = {
  register,
  login,
  signOut,
  update,
};

export { authActions };
