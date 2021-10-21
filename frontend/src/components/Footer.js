import React from 'react'

function Footer() {
    return (
            <footer class="footer-container">
        <img src="img/Daily Buddy-logos.jpeg" alt=""/>
        
        <div class="social-icons">
            <i class='bx bxl-linkedin-square' ></i>
            <i class='bx bxl-github' ></i>
            <i class='bx bxl-linkedin-square' ></i>
            <i class='bx bxl-github' ></i>
        </div>
         {/* <ul class="footer-links">
            <li class="menu-item">Politicas</li>
            <li class="menu-item">Cookies</li>
            <li class="menu-item">Servicios</li>
            <li class="menu-item">Privacidad</li>
            <li class="menu-item">Contacto</li>
        </ul>  */}
        <span class="copyright">&copy;2021, Daily Buddy</span>
    </footer>
    )
}

export default Footer
