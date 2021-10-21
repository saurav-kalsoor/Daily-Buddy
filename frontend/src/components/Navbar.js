import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
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
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </div>

            <div className="dropdown">
                <button type="button" className="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown">
                    Name of person
                </button>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/">Logout</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar