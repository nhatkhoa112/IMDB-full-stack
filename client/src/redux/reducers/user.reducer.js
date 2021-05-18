import * as types from "../constants/user.constants";

const token = localStorage.getItem("accessToken");

const initialState = {
  id: null,
  email: [],
  password: "",
  isAuthenticated: true,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.REGISTER_REQUEST:
    case types.REGISTER_SUCCESS:
    case types.REGISTER_FAILURE:
    default:
      return state;
  }
};

export default userReducer;
