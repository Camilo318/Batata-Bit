import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Exchange = () => {
    const date = new Date()
    const container = useRef(null)
    useEffect(() => {
        const bitcoinTL = gsap.timeline()
        
        bitcoinTL.from('.exchange__img .img', {
            duration: 1.2,
            skewX: 10,
            scale: 0.1,
            rotate: 90,
            x: -300,
            ease: 'power3',
            scrollTriger: {
                markers: true,
                trigger: container.current,
                start: 'top 10px',
                toogleActions: 'play pause reverse pause'
            }
        })

    }, [])
    return (
        <section className='exchange'>
            <div className='exchange__img' ref={container}>
                <div className="img"></div>
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
                <h3>Monedas</h3>
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
                <p>
                    <strong>Actualizado: </strong>
                    { date.toDateString() }
                </p>
            </section>
        </section>
    )
}

export default Exchange
