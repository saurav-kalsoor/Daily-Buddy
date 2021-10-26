import { React, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { useAlert } from 'react-alert'
import AuthService from '../../services/AuthService';

function Login() {

	const [credentials, setCredentials] = useState({ email: "", password: "" })
	let history = useHistory();
	const alert = useAlert();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await AuthService.login(credentials.email, credentials.password)
			history.push("/");
			alert.success("Logged in Successsfully")
		} catch (error) {
			if (error.response && error.response.status === 500)
				alert.error("Internal Server Error")
			else
				alert.error("Invalid Credentials")
			console.error(error)
		}

	}

	const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value })
	}

	return (
		<>
			<div className="container">
				<div className="row">

					<div className="col-md-6 d-none d-md-block">
						<img src="img/signin.png" alt="" className="img-fluid" />
					</div>

					<div className="col-md-6 my-3">
						<div className="text-center">

							<form onSubmit={handleSubmit} className="register-login" action="">
								<h1 className="font-weight-bold text-primary mb-4">DAILY BUDDY</h1>
								<div className="input-field w-75 mx-auto">
									<i className="fa fa-user"></i>
									<input type="email" placeholder="Email" name="email" value={credentials.email} onChange={onChange} required />
								</div>

								<div className="input-field w-75 mx-auto">
									<i className="fa fa-lock"></i>
									<input type="password" placeholder="Password" name="password" value={credentials.password} onChange={onChange} required />
								</div>

								<input type="submit" value="Login" className="btn btn-outline-primary rounded-pill m-3 px-5 font-weight-bold" />
							</form>

						</div>
					</div>
				</div>
			</div>

			<div className="colo-12 col-md-6 my-1 my-sm-0 text-center mx-auto">
				<h1 className="font-weight-bold">New here?</h1>
				<p>Join our community to get benifits</p>
				<Link to="/register" className="btn btn-lg btn-outline-primary rounded-pill m-3 px-5  font-weight-bold">Sign up</Link>
			</div>
		</>
	)
}

export default Login
