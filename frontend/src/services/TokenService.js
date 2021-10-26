import axios from 'axios';

const host = process.env.REACT_APP_HOST

const setUser = (data) => localStorage.setItem("user", JSON.stringify(data));

const getRefreshToken = () => {
    const storage = localStorage.getItem("user");
    return JSON.parse(storage).refreshToken
}

const getAccessToken = () => {
    const storage = localStorage.getItem("user");
    return JSON.parse(storage).accessToken;
}

const setAccessToken = (token) => {
    const storage = localStorage.getItem("user");
    let user = JSON.parse(storage);
    user.accessToken = token;
    setUser(user);
}

const setRefreshToken = (token) => {
    const storage = localStorage.getItem("user");
    let user = JSON.parse(storage);
    user.refreshToken = token;
    setUser(user);
}

const getNewAccessToken = async () => {
    const refreshToken = getRefreshToken();
    console.log("line 30")
    const { data } = await axios.post(`${host}/api/auth/refreshToken`, { refreshToken: refreshToken });
    console.log("line 31", data)
    return data;
}

const TokenStorage = {
    setUser,
    setAccessToken,
    setRefreshToken,
    getRefreshToken,
    getAccessToken,
    getNewAccessToken,
};

export default TokenStorage;