import axios from 'axios';

const host = process.env.REACT_APP_HOST

// const getAuthenticatedUser = async () => {
//     const token = TokenStorage.getAccessToken();

//     const { data } = await axios.get(`/user/profile`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     return data;
//   };
const getAuthenticatedUser = async () => {

    const { data } = await axios.get(`${host}/api/auth/getuser`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });

    return data;
};


const register = async (userInfo) => {

    const response = await axios.post(`${host}/api/auth/register`, userInfo);

    const json = response.data

    // if (json.success) {
    //     localStorage.setItem('token', json.accessToken); // Save auth token and redirect
    //     history.push("/");
    //     alert.success("Account created Successsfully")
    // } else {
    //     alert.error("Invalid Credentials")
    // }
    if (json.success)
        localStorage.setItem('token', json.accessToken); // Save auth token and redirect

    return json;
};

const login = async (email, password) => {

    const response = await axios.post(`${host}/api/auth/login`, { email, password });

    const json = response.data

    if (json.success)
        localStorage.setItem('token', json.accessToken); // Save auth token and redirect
    // 		history.push("/");
    // 		alert.success("Logged in Successsfully")
    // 	} else {
    // 		alert.error("Invalid Credentials")
    // 	}

    // const { data } = await axios.post(`/authentication/login`, {
    //     email,
    //     password,
    // });

    // TokenStorage.setUser(data);

    // return data;

    return json;
};

const AuthService = { login, register, getAuthenticatedUser }

export default AuthService