import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Exchange = () => {
    const date = new Date()
    const container = useRef(null)

    useEffect(() => {
        const bitcoinTL = gsap.timeline({
            scrollTrigger: {
                // markers: true,
                trigger: container.current,
                start: 'top-=150px 100px',
                end : 'bottom center-=100px',
                toggleActions: 'restart none none reverse',
                scrub: true
            }
        })
        
        bitcoinTL.from('.img', {
            duration: 2,
            skewX: 10,
            scale: 0,
            rotate: 90,
            x: -300,
            ease: 'power3'
        })
        .from('.label', {
            delay: -1.6,
            opacity: 0,
            duration: 2,
            skewX: 10,
            x: -100,
            ease: 'elastic.inOut',
            stagger: 1
        })

    }, [])

    useEffect(() => {
        const Tl = gsap.timeline({
            scrollTrigger: {
                // markers: true,
                trigger: container.current,
                start: 'bottom-=150px 100px',
                end : 'bottom+=300px center-=100px',
                toggleActions: 'restart none none reverse'
            }
        })
        Tl.from('.exchange__header > *', {
            opacity: 0,
            duration: 1,
            y: 30,
            ease: 'power3',
            stagger: 0.2
        })
        .from('.exchange__h3, .exchange__grid', {
            delay: -0.6,
            opacity: 0,
            duration: 0.6,
            y: 30,
            ease: 'power3',
            stagger: 0.2
        })
        .from('.grid-item', {
            duration: 0.8,
            delay: -0.4,
            opacity: 0,
            scale: 0.3,
            ease: 'bounce',
            stagger: 0.2
        })
        .from('.exchange__tag', {
            opacity: 0,
            duration: 0.5,
            scale: 0.3,
            ease: 'bounce'
        })
    }, [])

    return (
        <section className='exchange'>
            <div className='exchange__img' ref={container}>
                <div className="img"></div>
                <p className='label'>Que la incertidumbre en</p>
                <p className='label'>materia de criptomonedas</p>
                <p className='label'>sea cosa del pasado</p>
            </div>
            <div className='exchange__header'>
                <h2>
                    Visualizamos todas las tasas de cambio.
                </h2>
                <p>
                    Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.
                </p>
            </div>
            <section className='exchange__tables'>
                <h3 className='exchange__h3'>Monedas</h3>
                <div className='exchange__grid'>
                    <div className="grid-item left">Bitcoin</div>
                    <div className="grid-item right">$ 1.96</div>
                    <div className="grid-item left">Ethereum</div>
                    <div className="grid-item right">$ 0.07</div>
                    <div className="grid-item left">Ripple</div>
                    <div className="grid-item right">$ 2.15</div>
                    <div className="grid-item left">Stellar</div>
                    <div className="grid-item right">$ 4.96</div>
                </div>
                <p className='exchange__tag'>
                    <strong>Actualizado: </strong>
                    { date.toDateString() }
                </p>
            </section>
        </section>
    )
}

export default Exchange
