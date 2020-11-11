import React, { useState } from 'react'


const ExpansionWrapper = ({children, hidden}) => {
    return(
        <div className="faq__answer"
        style={{ maxHeight: hidden ? '0px' : '330px'}}>
            { children }
        </div>
    )
}

const Question = ({ children }) => {
    const [hidden, setHidden] = useState(true)
    return (
    <div className="faq__body" onClick={() => setHidden(!hidden)}>
        <div className="faq__question">
            { children[0] }
            <div className="arrow"></div>
        </div>
        <ExpansionWrapper hidden={hidden}>
            { children[1] }
        </ExpansionWrapper>
    </div>)
}

const Faq = () => {

    return (
        <section className='faq'>
            <div className="faq__header">
                <h2>
                    ¿Preguntas? Aquí estamos para ti.
                </h2>
            </div>
            <div className="faq__wrapper">
                <Question>
                    <p className='question'>Batabit me permite hacer compras en su plataforma?</p>
                    <p className='answer'>No. Batabit es una plataforma exclusivamente para consulta de información y toma de decisiones. Todavía no ofrecemos servicios de compra o venta.</p>
                </Question>
                <Question>
                    <p className='question'>
                        Qué es Bitcoin?
                    </p>
                    <p className='answer'>
                        No. Batabit es una plataforma exclusivamente para consulta de información y toma de decisiones. Todavía no ofrecemos servicios de compra o venta.
                    </p>
                </Question>
                <Question>
                    <p className='question'>
                        Cómo puedo realizar una transacción en bitcoins?
                    </p>
                    <p className='answer'>
                        No. Batabit es una plataforma exclusivamente para consulta de información y toma de decisiones. Todavía no ofrecemos servicios de compra o venta.
                    </p>
                </Question>
                <Question>
                    <p className='question'>
                        Cómo aseguro mis compras?
                    </p>
                    <p className='answer'>
                        No. Batabit es una plataforma exclusivamente para consulta de información y toma de decisiones. Todavía no ofrecemos servicios de compra o venta.
                    </p>
                </Question>
            </div>
        </section>
    )
}

export default Faq
