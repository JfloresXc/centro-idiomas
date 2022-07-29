import React from 'react'
import { ErrorMessage } from '@hookform/error-message'

import './select.css'

const setStyle = (type) => {
    switch (type) {
        case 'outline-purple': return 'select-outline-purple';
        case 'light': return 'select-light';
        default: return 'Nothing';
    }
}

export default function Select({
    name = 'select_empty',
    options = [],
    style = 'outline-purple',
    register = null,
    errors = {}
}) {
    const getRegister = () => {
        if (register) {
            return {
                ...register(name, {
                    required: `Este campo es requerido`
                })
            }
        }
        else return {}
    }

    const validateName = name => {
        let nameNow = name
        if (name.includes('_')) {
            const names = name.split('_')
            nameNow = names[0] + ' ' + names[1]
        }
        return nameNow.charAt(0).toUpperCase() + nameNow.slice(1)
    }

    return (
        <div className={`select ${setStyle(style)}`}>
            <label
                htmlFor={name}
                className="select__label"
            >{validateName(name)}</label>
            <select
                className='select__box'
                name={name}
                {...getRegister()}
            >
                {options.map((e, index) => <option
                    key={index}
                    className="select__option"
                    value={e}
                >{e}</option>)}
            </select>
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <p className="select__error">{message}</p>}
            />
        </div>
    )
}
