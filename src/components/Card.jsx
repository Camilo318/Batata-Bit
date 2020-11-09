import React from 'react'

const Card = ({ icon, title, children}) => {
    return (
        <div className='card'>
            <img src={icon} alt="Benefit"/>
            <h3>{ title }</h3>
            <p>
                { children }
            </p>
        </div>
    )
}

export default Card
