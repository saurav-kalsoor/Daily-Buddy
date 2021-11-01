import React from 'react'
import Footer from './Footer'

function Home() {
    const navBgColor = { "background": "#a5cdec" }
    return (
        <>
            <div className="">

                <div className="row bg-light p-5">
                    <div className="col-md-4 d-none d-md-block ">
                        <img src="img/dailybuddy.png" alt="" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-8 my-3 p-3 text-center mt-5">
                        <h1 className="display-2">Welcome To Daily Buddy!</h1>
                    </div>

                    <div className="col-md-8 my-5 p-3 text-center">
                        <h1 className="display-4">We are here to help you out for your daily schedules!</h1>
                    </div>
                    <div className="col-md-4 d-none d-md-block ">
                        <img src="img/dailybuddy2.png" alt="" className="img-fluid" />
                    </div>
                </div>


                

                <div className="row p-5" style={navBgColor}>
                    <div className="col-md-4 d-none d-md-block ">
                        <img src="img/forget.png" alt="" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-8 my-5 p-3 text-center text-light">
                        <h1  className="display-4">Do you always forget about the online classes?</h1>
                    </div>

                    <div className="col-md-6 my-3 p-3 text-center text-light">
                        <h1  className="mt-5 mb-3">Don't worry, we got you covered! </h1> 
                        <h4> Now check your daily time-table and set a remainder for each of your classes and never miss an online class again!</h4>
                    </div>

                    <div className="col-md-2 my-3 p-3 "></div>

                    <div className="col-md-4 d-none d-md-block ">
                        <img src="img/calendar.png" alt="" className="img-fluid" />
                    </div>
                </div>


                <div className="row bg-light p-5" >
                    <div className="col-md-4 d-none d-md-block ">
                        <img src="img/expenses.png" alt="" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-8 my-5 p-3 text-center">
                        <h1 className="display-4">Can't keep track of your pocket money?</h1>
                    </div>

                    <div className="col-md-6 my-3 p-3 text-center">
                        <h1 className="mt-5 mb-3">Now track you Daily Expenses!</h1>
                        <h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis tempora dolor vitae unde quaerat! Deleniti totam neque quis modi voluptatum?</h4>
                    </div>
                    <div className="col-md-2 my-3 p-3 "></div>
                    <div className="col-md-4 d-none d-md-block ">
                        <img src="img/expenses2.png" alt="" className="img-fluid" />
                    </div>
                </div>

                <div className="row p-5" style={navBgColor}>
                    <div className="col-md-4 d-none d-md-block ">
                        <img src="img/news1.png" alt="" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-8 my-5 p-3 text-center text-light">
                        <h1 className="display-4">Do you know what's going on around the world?</h1>
                    </div>

                    <div className="col-md-6 my-3 p-3 text-center text-light">
                        <h1 className="mt-5 mb-3">Check out the exciting news!</h1>
                        <h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis tempora dolor vitae unde quaerat! Deleniti totam neque quis modi voluptatum?</h4>
                    </div>
                    <div className="col-md-2 my-3 p-3 "></div>
                    <div className="col-md-4 d-none d-md-block ">
                        <img src="img/news.png" alt="" className="img-fluid" />
                    </div>
                </div>





            </div>

            {/* <Footer/> */}
        </>
    )
}

export default Home
