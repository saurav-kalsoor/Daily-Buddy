import React from 'react'

function Home() {
    const navBgColor = { "background": "#a5cdec" }
    return (
        <>
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
                    <h1 className="display-4">Do you always forget about the online classes?</h1>
                </div>

                <div className="col-md-6 my-3 p-3 text-center text-light">
                    <h1 className="mt-5 mb-3">Don't worry, we got you covered! </h1>
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
                    <h4>Too many people spend money they earned..to buy things they don't want..to impress people that they don't like. A wise person should have money in their head, but not in their heart.</h4>
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
                    <h1 className="mt-5 mb-3">Are you informed?</h1>
                    <h4> It’s a New Story Here. Move Closer To Your World and Check whats going on</h4>
                </div>
                <div className="col-md-2 my-3 p-3 "></div>
                <div className="col-md-4 d-none d-md-block ">
                    <img src="img/news.png" alt="" className="img-fluid" />
                </div>
            </div>
            
            
            <footer className="footer-container">
                <img src="img/logo3.png" alt="" />
                <div className="text-light">Catch Hasan and Saurav here 👇</div>

                <div className="social-icons">
                    <a href={"https://www.linkedin.com/in/hasan-koser-74868a177/"} target="_blank" rel="noreferrer"><i className='bx bxl-linkedin-square' /></a>
                    <a href={"https://github.com/HASH-002"} target="_blank" rel="noreferrer"><i className='bx bxl-github' /></a>
                    <a href={"https://www.linkedin.com/in/saurav-kalsoor-099b16190/"} target="_blank" rel="noreferrer"><i className='bx bxl-linkedin-square' /></a>
                    <a href={"https://github.com/saurav-kalsoor"} target="_blank" rel="noreferrer"><i className='bx bxl-github' /></a>
                </div>

                <span className="copyright">&copy;2021, Daily Buddy</span>
            </footer>
        </>
    )
}

export default Home
