import React from 'react'

import './Button.style.css'

export default function Button(props) {
    return (
        <button
            type={props.type}
            className={props.class}
            disabled={props?.disabled}>{props.label}</button>
    )
}
