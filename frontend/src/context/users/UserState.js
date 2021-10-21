import UserContext from "./UserContext"
import { React, useState } from "react";

function UserState(props) {
    const host = process.env.REACT_APP_HOST
    const [users, setUsers] = useState([]);

    // Get all users
    const getUser = async () => {
        // API call
        const response = await fetch(`${host}/auth/getuser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setUsers(json)
    }

    // // Add a transaction
    // const addTransaction = async (text, amount) => {
    //     // API call
    //     const response = await fetch(`${host}/transaction/addtransaction`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "Authorization": 'Bearer ' + localStorage.getItem('token')
    //         },
    //         body: JSON.stringify({ text, amount })
    //     });
    //     const json = await response.json();
    //     setTransactions(transactions.concat(json).sort(mySort))
    // }

    // // Delete a transaction
    // const deleteTransaction = async (_id) => {
    //     // API call
    //     await fetch(`${host}/transaction/deletetransaction/${_id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "Authorization": 'Bearer ' + localStorage.getItem('token')
    //         }
    //     });
    //     const newTransactions = transactions.filter((transaction) => { return transaction._id !== _id })
    //     setTransactions(newTransactions.sort(mySort))


    // }


    return (
        <UserContext.Provider value={{ users, getUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState