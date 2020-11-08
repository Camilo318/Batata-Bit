import React from 'react'
import logo from '../assets/img/logo.svg'

const Header = () => {
    return (
        <header>
            <img src={logo} alt=""/>
            <div className='header__container'>
                <h1>
                    La próxima revolución en el intercambio de criptomonedas.
                </h1>
                <p>
                    Batabit te ayuda a navegar entre los diferentes precios y tendencias.
                </p>
                <a href="" className='header__cta'>
                    Conoce Nuestros Planes
                    <span></span>
                </a>
            </div>
            
        </header>
    )
}

export default Header
