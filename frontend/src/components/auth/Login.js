import React from 'react'

function Login() {
    return (
        <>
            <div className="container">
		<div className="row">
			
			<div className="col-md-6 d-none d-md-block">
				<img src="img/signin.png" alt="" className="img-fluid"/>
			</div>
			
			<div className="col-md-6 my-3">
				<div className="text-center">

					<form className="register-login" action="">
						<h1 className="font-weight-bold text-primary mb-4">DAILY BUDDY</h1>
						<div className="input-field w-75 mx-auto">
							<i className="fa fa-user"></i>
							<input type="text" placeholder="Email"/>
						</div>
						<div className="input-field w-75 mx-auto">
							<i className="fa fa-lock"></i>
							<input type="password" placeholder="Password"/>
						</div>
						<input type="submit" value="Login" className="btn btn-outline-primary rounded-pill m-3 px-5 font-weight-bold"/>	
					</form>

				</div>
			</div>
		</div>
	</div>
{/* 	Routes maintainance
	<div className="colo-12 col-md-6 my-1 my-sm-0 text-center mx-auto">
		<h1 className="font-weight-bold">New here?</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dicta assumenda dolorum doloremque similique ipsa dolore porro sunt, eos facilis mollitia</p>
		<a href="signup.html" className="btn btn-lg btn-outline-primary rounded-pill font-weight-bold">Sign up</a>
	</div> */}
        </>
    )
}

export default Login
