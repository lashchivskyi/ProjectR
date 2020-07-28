import { userAPI, profileAPI } from "../api/api";
const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_SAVE_PHOTO = "SET_SAVE_PHOTO";

let initialState = {
  posts: [
    { id: 1, message: "Hi,haw yu doing", likesCount: 234 },
    { id: 2, message: "Hello", likesCount: 134 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case SET_USERS_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SET_SAVE_PHOTO: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const setUserProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile,
});
export const savePhotoSuccess = (photos) => ({
  type: SET_SAVE_PHOTO,
  photos,
});

export const getUserProfile = (userId) => (dispatch) => {
  userAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

// status
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) dispatch(setStatus(status));
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0)
    dispatch(savePhotoSuccess(response.data.data.photos));
};

export default profileReducer;
