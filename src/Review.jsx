import React from 'react'
import './Review.css'
import star from './assets/star-7207.svg'

function Review(props) {
    return (
        <div className={props.class}>
            <div className="stars-container">
                <img className="star-img" src={star} alt="" />
                <img className="star-img" src={star} alt="" />
                <img className="star-img" src={star} alt="" />
                <img className="star-img" src={star} alt="" />
                <img className="star-img" src={star} alt="" />
            </div>
            <div className="review-description">
                <p>{props.description}</p>
            </div>
            <div className="review-profile">
                <img className="review-pfp" src={props.profilePic} alt="" />
                <h3 className="review-name">{props.name}</h3>
            </div>
        </div>
    )
}

export default Review