import React from 'react'

const Exchange = () => {
    const date = new Date()
    return (
        <section className='exchange'>
            <div className='exchange__img'>
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
