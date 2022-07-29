import React from 'react'
import { FormLogin } from 'components/form'

import './login-alumno.css'

export default function LoginAlumno() {
    return (
        <div className="login-alumno">
            <div className="login-alumno__content">
                <h3 className="login-alumno__title">ESTUDIANTE</h3>
                <p className="login-alumno__message">La mejor alternativa para aprender el idioma que
                    deseas es nuestro centro de idiomas. Sé parte del éxito de nuestros planes. </p>
            </div>
            <FormLogin title="Hello student"/>
        </div>
    )
}
