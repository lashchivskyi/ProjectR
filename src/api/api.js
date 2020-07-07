import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "8260532d-6680-470c-8205-607fd1075ac0",
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
};
