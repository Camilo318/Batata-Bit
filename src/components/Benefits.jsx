import React from 'react'
import Card from './Card'
import clock from '../assets/icons/clock.svg'
import eye from '../assets/icons/eye.svg'
import dollar from '../assets/icons/dollar-sign.svg'
import check from '../assets/icons/check-circle.svg'
import batata from '../assets/icons/batata.svg'

const Benefits = () => {
    return (
        <section className='benefits'>
            <img src={batata} alt="logo" className="benefits__batata"/>
            <div className="benefits__header">
                <h2>
                    Creamos un producto sin comparación.
                </h2>
                <p>
                    Confiable y diseñado para su uso diario.
                </p>
            </div>

            <div className="benefits__wrapper">
                <Card title='Tiempo real' icon={clock}>
                    Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.
                </Card>
                <Card title='No hay tasas escondidas' icon={eye}>
                    Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.
                </Card>
                <Card title='Compara monedas' icon={dollar}>
                    No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual.
                </Card>
                <Card title='Información confiable' icon={check}>
                    Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.
                </Card>
                
            </div>
        </section>
    )
}

export default Benefits
