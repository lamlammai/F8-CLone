import Axios from "axios";

import { history } from "../../App";
import {
  setToken,
  getToken,
  clearToken,
  clearRefreshToken,
  getRefreshToken,
} from "../storage/index";

const axiosInstance = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: "http://103.75.186.104:3000",
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  (error) => Promise.reject(error)
);

const logout = () => {
  clearToken();
  clearRefreshToken();
  history.replace("/");
};

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalConfig = error.config;
    console.log(error);
    if (error?.response?.status === 404) {
      return history.replace("/");
    }

    if (error?.response?.status === 401) {
      // const refreshToken = getRefreshToken();
      // if (!refreshToken) {
      //   alert("errr");
      //   logout();

      //   return Promise.reject(error);
      // }
      return Axios.post(
        `http://103.75.186.104:3000/api/auth/refresh-token`,
        refreshToken
      )
        .then((res) => {
          if (res.status === 200) {
            const token = res.data?.data;
            setToken(token);
            originalConfig.headers.Authorization = `Bearer ${token}`;
            return Axios(originalConfig);
          } else {
            logout();
            return Promise.reject(error);
          }
        })
        .catch(() => {
          logout();
          return Promise.reject(error);
        });
    }
    return Promise.reject(error);
  }
);

export const sendGet = (url, params) =>
  axiosInstance.get(url, { params }).then((res) => res.data);
export const sendPost = (url, params, queryParams) =>
  axiosInstance
    .post(url, params, { params: queryParams })
    .then((res) => res.data);
export const sendPut = (url, params) =>
  axiosInstance.put(url, params).then((res) => res.data);
export const sendDelete = (url, params) =>
  axiosInstance.delete(url, { data: params }).then((res) => res.data);
