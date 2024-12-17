import React from 'react'
import './Services.css'

function PriceCard(props) {
    return (
        <div className="price-card">
            <h3 className="service-card-title">{props.title}</h3>
            <h3 className="service-card-price">{props.price}</h3>
        </div>
    )
}

export default PriceCard