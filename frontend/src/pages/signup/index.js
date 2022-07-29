import React from 'react'
import { NavbarsHome } from 'components/navbar'
import Footer from 'components/footer'
import SignUp from 'components/signup'

export default function Signup() {
    return (
        <>
            <header>
                <NavbarsHome />
            </header>
            <main>
                <section>
                    <SignUp />
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}
