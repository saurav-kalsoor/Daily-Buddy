import { React, useContext, useEffect } from 'react'
import { Link, useHistory, useLocation } from "react-router-dom";
import UserContext from '../context/users/UserContext';
import { useAlert } from 'react-alert'
import AuthService from '../services/AuthService';

function Navbar() {

    const { users, getUser } = useContext(UserContext);
    const alert = useAlert();
    let location = useLocation();
    let history = useHistory();

    useEffect(() => {
        if (localStorage.getItem("user"))
            getUser();
        // eslint-disable-next-line
    }, [location]);

    const handleLogout =  async () => {
        try {
            await AuthService.logout()
            history.push('/')
            alert.success("Logged out successfully")
        } catch (error) {
            console.error(error)
            alert.error("Internal Server Error")
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >

            <Link style={{ color: 'blue' }} className="navbar-brand" to="/">
                <img src="img/Daily Buddy-logos.jpeg" width="30" height="30" className="d-inline-block rounded-circle align-top mx-1" alt="" loading="lazy" />
                Daily Buddy
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className={"nav-item " + location.pathname === '/' ? "active" : ""}>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    {localStorage.getItem("user") && <li className={"nav-item " + location.pathname === '/expense' ? "active" : ""}>
                        <Link className="nav-link" to="/expense">Expense</Link>
                    </li>}

                    {localStorage.getItem("user") && <li className={"nav-item " + location.pathname === '/classScheduler' ? "active" : ""}>
                        <Link className="nav-link" to="/classScheduler">Class Scheduler</Link>
                    </li>}

                </ul>

                {!localStorage.getItem("user") &&
                    <form className="d-flex">
                        <Link className="btn btn-outline-primary mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-outline-primary mx-1" to="/register" role="button">SignUp</Link>
                    </form>
                }

            </div>

            {/* Protected Routes */}
            {localStorage.getItem("user") && <div className="dropdown mx-4">
                <button type="button" className="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown">
                    {users.username}
                </button>
                <div className="dropdown-menu dropdown-menu-right" >
                    <button onClick={handleLogout} className="dropdown-item" to="/">Logout</button>
                </div>
            </div>}
        </nav>
    )
}

export default Navbar