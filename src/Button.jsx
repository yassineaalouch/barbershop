import React from 'react'

function Button(props) {
    return (
        <button className={props.class}><a href={props.link}>{props.text}</a></button>
    )
}

export default Button;