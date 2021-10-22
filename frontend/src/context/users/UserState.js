import UserContext from "./UserContext"
import { React, useState } from "react";
import AuthService from "../../services/AuthService";

function UserState(props) {
    
    const [users, setUsers] = useState([]);

    // Get all users
    // const getUser = async () => {
    //     // API call
    //     const response = await fetch(`${host}/api/auth/getuser`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "Authorization": 'Bearer ' + localStorage.getItem('token')
    //         }
    //     });
    //     const json = await response.json();
    //     setUsers(json)
    // }
    const getUser = async () => {
        // API call
        const json = await AuthService.getAuthenticatedUser();
        setUsers(json)
    }

    return (
        <UserContext.Provider value={{ users, getUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState