import React from 'react'
import '../Style.css';

function Registration() {
    return (
        <>
            <div className="container">
                <div className="row">

                    <div className="col-md-6 d-none d-md-block">
                        <img src="img/signup.png" alt="" className="img-fluid" />
                    </div>

                    <div className="col-md-6 my-3">
                        <div className="text-center">
                            <form action="">
                                <h1 className="font-weight-bold text-primary mb-4">DAILY BUDDY</h1>
                                <div className="input-field w-75 mx-auto">
                                    <i className="fa fa-user"></i>
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input-field w-75 mx-auto">
                                    <i className="fa fa-envelope"></i>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="input-field w-75 mx-auto">
                                    <i className="fa fa-lock"></i>
                                    <input type="password" placeholder="Password" />
                                </div>
                                <input type="submit" value="Sign up" className="btn btn-lg btn-outline-primary rounded-pill m-3 font-weight-bold" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Router handle */}
            <div className="colo-12 col-md-6 my-1 my-sm-0 text-center mx-auto">
                <h1 className="font-weight-bold">One of us?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dicta assumenda dolorum doloremque similique ipsa dolore porro sunt, eos facilis mollitia</p>
                <a href="signin.html" className="btn btn-lg btn-outline-primary rounded-pill font-weight-bold">Sign in</a>
            </div>
        </>
    )
}

export default Registration
