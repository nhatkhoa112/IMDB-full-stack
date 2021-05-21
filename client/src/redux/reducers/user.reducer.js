import * as types from '../constants/user.constants';

const token = localStorage.getItem('accessToken');

const initialState = {
  name: '',
  email: '',
  isAuthenticated: !!token,
  isRedirect: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  // const { type } = action;

  switch (type) {
    case types.REGISTER_REQUEST:
      return state;
    case types.REGISTER_SUCCESS:
      localStorage.setItem('accessToken', payload.token);
      console.log(payload);
      return {
        ...state,
        email: payload.data.email,
        name: payload.data.name || '',
        isRedirect: true,
      };
    case types.LOGIN_FAILURE:
      return state;
    case types.LOGIN_REQUEST:
      return state;
    case types.LOGIN_SUCCESS:
      localStorage.setItem('accessToken', payload.token);
      return {
        ...state,
        name: payload.data.name,
        email: payload.data.email,
        isRedirect: true,
      };
    case types.REGISTER_FAILURE:
      return state;
    case types.SIGN_OUT:
      localStorage.removeItem('accessToken');
      return state;
    default:
      return state;
  }
};

export default userReducer;
