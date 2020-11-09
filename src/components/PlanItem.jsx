import React from 'react'

const PlanItem = ({children, title, price, best}) => {
    return (
        <div className='item'>
            { best && <p className='item__tag'>Recomendado</p> }
            <h4>
                { title }
            </h4>
            <div className="item__price">
                <span>$</span>{ price }
            </div>
            <p className="item__info">
                { children }
            </p>
            <button className="item__cta">
                Escoger ahora
            </button>
        </div>
    )
}

export default PlanItem
