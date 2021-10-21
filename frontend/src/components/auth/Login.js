import { React, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { useAlert } from 'react-alert'

function Login() {

	const [credentials, setCredentials] = useState({ email: "", password: "" })
	const host = process.env.REACT_APP_HOST
	let history = useHistory();
	const alert = useAlert();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(host)
		const response = await fetch(`${host}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email: credentials.email, password: credentials.password })
		});
		const json = await response.json(); // Recieved token

		if (json.success) {
			localStorage.setItem('token', json.accessToken); // Save auth token and redirect
			history.push("/");
			alert.success("Logged in Successsfully")
		} else {
			alert.error("Invalid Credentials")
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
									<input type="email" placeholder="Email" name="email" value={credentials.email} onChange={onChange} />
								</div>

								<div className="input-field w-75 mx-auto">
									<i className="fa fa-lock"></i>
									<input type="password" placeholder="Password" name="password" value={credentials.password} onChange={onChange} />
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
