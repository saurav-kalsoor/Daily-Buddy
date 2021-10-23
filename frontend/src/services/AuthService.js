import Axios from './Axios';
import TokenStorage from './TokenService';

const host = process.env.REACT_APP_HOST

const getAuthenticatedUser = async () => {
    const token = TokenStorage.getAccessToken();
    const { data } = await Axios.get(`${host}/api/auth/getuser`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return data;
};

const register = async (userInfo) => {
    const { data } = await Axios.post(`${host}/api/auth/register`, userInfo);
    if (data.success)
        TokenStorage.setUser(data);
    return data;
};

const login = async (email, password) => {
    const { data } = await Axios.post(`${host}/api/auth/login`, { email, password });
    if (data.success)
        TokenStorage.setUser(data);
    return data;
}

const logout = async () => {
    const refreshToken = TokenStorage.getRefreshToken();
    await Axios.put(`${host}/api/auth/logout`, { refreshToken: refreshToken })
    localStorage.clear();
}

const AuthService = { register, login, getAuthenticatedUser, logout }
export default AuthService