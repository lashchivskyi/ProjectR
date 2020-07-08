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
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setUsersData = (userId, email, login) => ({
  type: SET_USERS_DATA,
  data: { userId, email, login },
});
export const getAuthUserdata = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setUsersData(id, email, login));
    }
  });
};

export default loginReducer;
