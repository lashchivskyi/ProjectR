import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "e32cf294-4f31-48b5-aceb-a23402309233",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const userAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    console.warn("Obsolete method.");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  // meTwo() {
  //   return instance.get(`profile/6258`);
  // },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  loginExit() {
    return instance.delete(`auth/login`);
  },
};
