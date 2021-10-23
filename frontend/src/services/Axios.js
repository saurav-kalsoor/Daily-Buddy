import axios from "axios";
import TokenStorage from "./TokenService";

const host = process.env.REACT_APP_HOST
const baseURL = `${host}/api`;
const Axios = axios.create({ baseURL });

Axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response.status;
    const originalRequest = error.config;

    if (status === 403) {
      const { accessToken, refreshToken } = await TokenStorage.getNewAccessToken();
      TokenStorage.setAccessToken(accessToken);
      TokenStorage.setRefreshToken(refreshToken);
      originalRequest.headers['authorization'] = "Bearer " + accessToken;
      return Axios.request(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default Axios;