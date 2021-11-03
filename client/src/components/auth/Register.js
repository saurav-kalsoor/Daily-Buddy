import { React, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { useAlert } from 'react-alert'
import AuthService from '../../services/AuthService';

function Registration() {

    const [details, setDetails] = useState({ username: "", email: "", password: "" })
    let history = useHistory();
    const alert = useAlert();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await AuthService.register(details)
            history.push("/");
            alert.success("Account created Successsfully")
        } catch (error) {
            console.error(error)
            alert.error("Invalid Credentials")
        }

    }

    const onChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="container my-4">
                <div className="row">

                    <div className="col-md-6 d-none d-md-block">
                        <img src="img/signup.png" alt="" className="img-fluid" />
                    </div>

                    <div className="col-md-6 my-3">
                        <div className="text-center">

                            <form onSubmit={handleSubmit} className="register-login" action="">
                                <h1 className="font-weight-bold text-primary mb-4">DAILY BUDDY</h1>
                                <div className="input-field w-75 mx-auto">
                                    <i className="fa fa-user"></i>
                                    <input type="text" name="username" placeholder="Username" onChange={onChange} required minLength={3} />
                                </div>
                                <div className="input-field w-75 mx-auto">
                                    <i className="fa fa-envelope"></i>
                                    <input type="email" name="email" placeholder="Email" onChange={onChange} required />
                                </div>
                                <div className="input-field w-75 mx-auto">
                                    <i className="fa fa-lock"></i>
                                    <input type="password" name="password" placeholder="Password" onChange={onChange} required minLength={3} />
                                </div>
                                <input type="submit" value="Sign up" className="btn btn-outline-primary rounded-pill m-3 px-5 font-weight-bold" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <div className="colo-12 col-md-6 my-3 my-sm-0 text-center mx-auto">
                <h1 className="font-weight-bold">One of us?</h1>
                <p>Hurry up and login here we are waiting for you ;)</p>
                <Link to="/login" className="btn btn-lg btn-outline-primary rounded-pill m-3 px-5 font-weight-bold">Login</Link>
            </div>
        </>
    )
}

export default Registration