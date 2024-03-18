import React from 'react'
import './ToggleSwitch.style.css'

export default function ToggleSwitch({ onClick, checked }) {
    return (
        <input
            type="checkbox"
            className="theme-checkbox"
            onChange={onClick}
            defaultChecked={checked}
        />
    )
}
