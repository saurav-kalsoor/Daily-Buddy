import UserContext from "./UserContext"
import { React, useState } from "react";
import AuthService from "../../services/AuthService";

function UserState(props) {
    
    const [users, setUsers] = useState([]);

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