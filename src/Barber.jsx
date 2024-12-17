import React from 'react';
import './Team.css';

function Barber(props) {
    return (
        <div className={props.class}>
            <div className="img-container">
                <img className="img-barber" src={props.img} alt="image of a barber" />
                <div className="card-overlay">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Barber;
