import React from 'react'
import { NavbarsHome } from 'components/navbar'
import LoginAlumno from 'components/login-alumno'
import Footer from 'components/footer'

export default function Alumno() {
    return (
        <>
            <header>
                <NavbarsHome />
            </header>
            <main>
                <section>
                    <LoginAlumno />
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}
