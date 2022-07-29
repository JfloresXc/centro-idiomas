import React from 'react'
import { Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import ReactDatePicker from 'react-datepicker'

import './input.css'

const expresiones = {
    username: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombres: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    contraseña: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,9}$/, // 7 a 14 numeros.
    mensualidad: /^[-]?[0-9]+[\.]?[0-9]+$/ // solo números.
}

const setStyle = (type) => {
    switch (type) {
        case 'outline-purple': return 'input-outline-purple'; break;
        case 'light': return 'input-light'; break;
        default: return 'Nothing';
    }
}

const validateName = name => {
    let nameNow = name
    if (name.includes('_')) {
        const names = name.split('_')
        nameNow = names[0] + ' ' + names[1]
    }
    return nameNow.charAt(0).toUpperCase() + nameNow.slice(1)
}

const validateTypeName = name => {
    let message, validation

    validation = expresiones[name] || null

    switch (name) {
        case 'correo': message = 'Debe tener la forma correo@correo.com'
            break;
        case 'telefono': message = 'Debe contener de 7 a 9 dígitos'
            break;
        case 'contraseña': message = 'Debe contener de 4 a 12 dígitos'
            break;
        case 'nombres': message = 'Debe contener solo letras y espacios'
            break;
        case 'username': message = 'Debe contener solo letras, números, guion y guion_bajo'
            break;
        case 'mensualidad': message = 'Debe contener solo números'
            break;
        default: message = 'Not message'
            break;
    }

    return {
        value: validation,
        message
    }
}

export function Input({
    placeholder = "",
    style = 'outline-purple',
    type = 'text',
    name = 'not name',
    register = null,
    errors = {}
}) {

    const getRegister = () => {
        if (register) {
            return {
                ...register(name, {
                    pattern: validateTypeName(name),
                    minLength: {
                        value: name === 'nombres' ? 4 : null,
                        message: "Este campo debe tener como mínimo 4 letras"
                    },
                    required: `Este campo es requerido`
                })
            }
        }
        else return {}
    }

    return (
        <div className={`input ${setStyle(style)}`}>
            <label
                htmlFor={name}
                className="input__label"
            >{validateName(name)}</label>
            <input
                id={name}
                type={type}
                placeholder={placeholder}
                className="input__box"
                {...getRegister()}
            />
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <p className="input__error">{message}</p>}
            />
        </div>
    )
}

export function TextArea({
    placeholder = "Not placeholder",
    id = -1,
    name = "Not label",
    type = 'outline-purple',
    errors = {},
    register = {}
}) {
    const getRegister = () => {
        if (register) return { ...register(name, { required: `Este campo es requerido` }) }
        else return {}
    }

    return (
        <div className={`input textarea ${setStyle(type)}`}>
            <label
                htmlFor={id}
                className="input__label"
            >{name.charAt(0).toUpperCase() + name.slice(1)}</label>
            <textarea
                id={id}
                placeholder={placeholder}
                className="input__box"
                rows="3"
                {...getRegister()}
            />
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <p className="input__error">{message}</p>}
            />
        </div>
    )
}

export function InputDatePicker({
    name = "Not label",
    type = 'outline-purple',
    control = {},
    errors = {}
}) {

    return (
        <div className={`input ${setStyle(type)}`}>
            <label
                htmlFor={name}
                className="input__label"
            >{validateName(name)}</label>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <ReactDatePicker
                        className="input__box"
                        placeholderText='Fecha'
                        onChange={(e) => field.onChange(e)}
                        selected={field.value}
                    />
                )}
            />
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <p className="input__error">{message}</p>}
            />
        </div>
    )
}
