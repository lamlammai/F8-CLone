export const accessToken = "accessToken";
export const refreshToken = "refreshToken";

export const setItem = (key, value) => {
  window.localStorage.setItem(key, value);
};

export const getItem = (key) => {
  const value = window.localStorage.getItem(key);
  return value === null ? "" : value;
};

export const setToken = (value) => {
  setItem(accessToken, value);
};

export const clearToken = () => setToken("");

export const getToken = () => getItem(accessToken);

export const setRefreshToken = (value) => {
  setItem(refreshToken, value);
};

export const clearRefreshToken = () => setRefreshToken("");

export const getRefreshToken = () => getItem(refreshToken);
