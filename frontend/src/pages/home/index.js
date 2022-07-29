import React from "react"
import { NavbarsHome } from "components/navbar"
import Hero from "components/hero"
import Features from "components/features"
import Testimonial from "components/testimonial"
import Footer from "components/footer"
import Info from "components/info"

export default function Home() {
	return (
		<>
			<main>
				<NavbarsHome />

				<section id="hero">
					<Hero />
				</section>
				<section id="nosotros">
					<Features />
				</section>
				<section id="clientes">
					<Testimonial />
				</section>
				<section id="contacto">
					<Info />
				</section>
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	)
}
