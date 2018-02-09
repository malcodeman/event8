import React from 'react';
import './style.css';

const Input = (props) => {
    return(        
            <div className="input-wrapper">
                <input className="input" type="text" placeholder={props.placeholder}/><button className="button">{props.buttonText}</button>
                <div className="transparent-border-bottom"></div>
            </div>        
    )
}

export default Input;