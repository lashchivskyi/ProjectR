import { authAPI } from "../api/api";
const SET_USERS_DATA = "SET_USERS_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setUsersData = (userId, email, login, isAuth) => ({
  type: SET_USERS_DATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthUserdata = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setUsersData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserdata());
    }
  });
};

export const loginExit = () => (dispatch) => {
  authAPI.loginExit().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUsersData(null, null, null, false));
    }
  });
};

export default loginReducer;
