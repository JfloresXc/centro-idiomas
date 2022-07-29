import React from "react"
import { Link } from "react-scroll"
import ListIcons from "../list-icons"
import Logo from "../logo"
import Links from "./Links"
import { useNav } from "./useNav"

import "./navbar.css"

function IconResponsive({ type, handleChange, iconRef }) {
	return (
		<>
			<input
				type="checkbox"
				id={`checkbox-${type}`}
				className="navbar__checkbox-hide"
				onChange={handleChange}
			/>
			<label
				htmlFor={`checkbox-${type}`}
				className="navbar__label-hide"
			>
				<i className="fas fa-bars" ref={iconRef}></i>
			</label>
		</>
	)
}

export function NavbarSign() {
	return (
		<nav className="navbar navbar-sign">
			<div className="navbar__list-up">
				<ListIcons />
			</div>
		</nav>
	)
}

export function NavbarLight() {
	const { iconRef, navbarRef, handleChange } = useNav()
	const links = ["#idiomas", "#clientes", "#contacto"]
	return (
		<nav className="navbar navbar-light">
			<div className="navbar__list-up">
				<div className="navbar__brand">
					<Logo className="navbar__logo" />
					<Link
						className="navbar__link navbar__link-brand"
						to={"hero"}
						spy={true}
						smooth={true}
						offset={-200}
						duration={500}
					>
						CENTRO IDIOMAS
					</Link>
				</div>
				<IconResponsive
					type="light"
					handleChange={handleChange}
					iconRef={iconRef}
				/>
			</div>
			<Links
				links={links}
				classes="navbar__list-down"
				reference={navbarRef}
			/>
		</nav>
	)
}

export function NavbarsHome() {
	return (
		<>
			<NavbarSign />
			<NavbarLight />
		</>
	)
}
