import React from 'react'
import { Link } from 'wouter'

import './button.css'

const setStyle = (type) => {
    switch (type) {
        case 'outline-light': return 'button__outline-light';
        case 'purple': return 'button__purple';
        case 'gray': return 'button__gray';
    }
}

export function ButtonLink({
    type = 'outline-light',
    message = "Not message",
    icon = false,
    root = '/'
}) {
    return (
        <Link to={root} className={`button ${setStyle(type)}`}>
            {message}
            {icon && <i class="fas fa-arrow-right button__icon"></i>}
        </Link>
    )
}

export function ButtonSubmit({
    type = 'outline-light',
    message = "Not message",
    icon = false,
}) {
    return <button
        type="submit"
        className={`button ${setStyle(type)}`}
    >
        {message}
        {icon && <i class="fas fa-arrow-right button__icon"></i>}
    </button>
}

export function ButtonClick({
    type = 'outline-light',
    message = "Not message",
    icon = false,
    handleClick
}) {
    return (
        <button className={`button ${setStyle(type)}`} onClick={handleClick}>
            {message}
            {icon && <i className="fas fa-arrow-right button__icon"></i>}
        </button>
    )
}

