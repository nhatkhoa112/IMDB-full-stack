import * as types from '../constants/user.constants';

const token = localStorage.getItem('accessToken');
const currentUser = JSON.parse(localStorage.getItem('imdbUser'));

const initialState = {
  id: currentUser ? currentUser._id : '',
  name: currentUser ? currentUser.name : '',
  email: currentUser ? currentUser.email : '',
  avatarUrl: currentUser ? currentUser.avatarUrl : '',
  // password: currentUser ? currentUser.password : '',
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
      localStorage.setItem('imdbUser', JSON.stringify(payload.data));
      console.log(payload);
      return {
        ...state,
        id: payload.data._id,
        email: payload.data.email,
        name: payload.data.name || '',
        isRedirect: true,
      };
    case types.REGISTER_FAILURE:
      return state;
    case types.LOGIN_REQUEST:
      return state;
    case types.LOGIN_SUCCESS:
      localStorage.setItem('accessToken', payload.token);
      localStorage.setItem('imdbUser', JSON.stringify(payload.data));
      return {
        ...state,
        id: payload.data._id,
        name: payload.data.name,
        email: payload.data.email,
        isRedirect: true,
      };
    case types.LOGIN_FAILURE:
      return state;
    case types.UPDATE_REQUEST:
      return state;
    case types.UPDATE_SUCCESS:
      localStorage.removeItem('imdbUser');
      localStorage.setItem('imdbUser', JSON.stringify(payload.data));
      return {
        ...state,
        name: payload.data.name,
        email: payload.data.email,
        avatarUrl: payload.data.avatarUrl,
        // password: payload.data.password,
        isRedirect: true,
      };
    case types.UPDATE_FAILURE:
      return state;
    case types.DESTROY_REQUEST:
      return state;
    case types.DESTROY_SUCCESS:
      return {
        ...state,
        name: payload.data.name,
        email: payload.data.email,
        avatarUrl: payload.data.avatarUrl,
      };
    case types.DESTROY_FAILURE:
      return state;
    case types.SIGN_OUT:
      localStorage.removeItem('accessToken');
      localStorage.removeItem('imdbUser');
      return {
        id: '',
        email: '',
        name: '',
        avatarUrl: '',
        isAuthenticated: false,
        isRedirect: false,
      };
    default:
      return state;
  }
};

export default userReducer;
