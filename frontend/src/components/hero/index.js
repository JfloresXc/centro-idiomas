import React from "react"
import { ButtonLink } from "../button"
import { Link } from "react-scroll"
import user1 from "../../storage/user1.png"
import user2 from "../../storage/user2.png"
import user3 from "../../storage/user3.png"
import user4 from "../../storage/user4.png"

import "./hero.css"

export default function Hero() {
	return (
		<div className="hero">
			<div className="hero__heading">
				<p className="hero__title">Centro Idiomas</p>
				<p className="hero__description">
					Impartimos cursos de inglés, portugués , francés y más
					en los niveles básico, intermedio y avanzado, en los
					sistemas regular e intensivo.
				</p>
				<Link
					className="button button__purple"
					to={"idiomas"}
					spy={true}
					smooth={true}
					offset={-55}
					duration={500}
				>
					Idiomas
				</Link>
			</div>
			<div className="hero__panel-dark">
				<div className="hero__panel-dark-sub">
					<img
						src={user1}
						loading="lazy"
						alt="user 1"
						className="hero__image animate__animated animate__bounceIn"
					/>
					<img
						src={user2}
						loading="lazy"
						alt="user 2"
						className="hero__image animate__animated animate__bounceIn"
					/>
					<img
						src={user3}
						loading="lazy"
						alt="user 3"
						className="hero__image animate__animated animate__bounceIn"
					/>
					<img
						src={user4}
						loading="lazy"
						alt="user 4"
						className="hero__image animate__animated animate__bounceIn"
					/>
				</div>
			</div>
		</div>
	)
}
