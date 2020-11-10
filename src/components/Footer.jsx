import React from 'react'
import logo from '../assets/img/logo-footer.svg'

const Footer = () => {
    return (
        <footer>
            <div className='footer__links'>
                <ul>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">CrunchBase</a></li>
                    <li><a href="#">HackerNews</a></li>
                </ul>
            </div>
            <div className="footer__batata">
                <img src={logo} alt="Logo de la compañia"/>
            </div>
        </footer>
    )
}

export default Footer
