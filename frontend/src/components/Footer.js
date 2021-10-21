import React from 'react'

function Footer() {



    return (
        <footer className="footer-container">
            <img src="img/Daily Buddy-logos.jpeg" alt="" />
            <div className="text-light">Catch Hasan and Saurav here 👇</div>

            <div className="social-icons">
                <a href={"https://www.linkedin.com/in/hasan-koser-74868a177/"} target="_blank" rel="noreferrer"><i className='bx bxl-linkedin-square' /></a>
                <a href={"https://github.com/HASH-002"} target="_blank" rel="noreferrer"><i className='bx bxl-github' /></a>
                <a href={"https://www.linkedin.com/in/saurav-kalsoor-099b16190/"} target="_blank" rel="noreferrer"><i className='bx bxl-linkedin-square' /></a>
                <a href={"https://github.com/saurav-kalsoor"} target="_blank" rel="noreferrer"><i className='bx bxl-github' /></a>
            </div>

            <span className="copyright">&copy;2021, Daily Buddy</span>
        </footer>
    )
}

export default Footer