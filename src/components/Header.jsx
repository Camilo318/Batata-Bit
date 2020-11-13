import React, { useRef, useEffect } from 'react'
import logo from '../assets/img/logo.svg'

const Header = () => {
    const header = useRef(null)
    const logoImg = useRef(null)
    useEffect(() => {
        gsap.from(header.current, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: 'power3',

        })

        gsap.from(logoImg.current, {
            opacity: 0,
            scale: 0.3,
            duration: 1.2,
            ease: 'power3'
        })
    }, [])

    return (
        <header>
            <img src={logo} alt="Company Logo" ref={logoImg}/>
            <div className='header__container' ref={header}>
                <h1>
                    La próxima revolución en el intercambio de criptomonedas.
                </h1>
                <p>
                    Batabit te ayuda a navegar entre los diferentes precios y tendencias.
                </p>
            </div>
            <a href="" className='header__cta'>
                Conoce Nuestros Planes
            </a>
            
        </header>
    )
}

export default Header
