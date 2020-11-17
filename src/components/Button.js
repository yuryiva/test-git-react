import React from 'react'

const Button = (props) => {
    console.log(props);
    return (
        <div>
            
            <p>22{props.color}</p>
            
            <p>33{props.text}</p>
            <h1>{props.main}</h1>
            
        </div>
    )
}

export default Button