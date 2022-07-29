import React from "react"
import { useUser } from "hooks/useUser"
import { NavbarMenu } from "components/navbar/NavbarMenu"
import CardLink from "./CardLink"
import sigu from "storage/sigu.jpeg"
import aulaVirtual from "storage/aulaVirtual.jpg"

import "./menu.css"

export default function Menu() {
	const { user = {}, logout } = useUser()
	const { username = "Not username" } = user

	return (
		<div className="menu">
			<NavbarMenu handleClick={logout} />
			<h2 className="menu__title">Hello {username}</h2>
			<div className="menu__cards">
				<CardLink
					src={sigu}
					title="SIGU"
					description="Reportes, mensajes, cursos"
				/>
				<CardLink
					src={aulaVirtual}
					title="AULA VIRTUAL"
					description="Archivos, descargas, foros"
				/>
			</div>
		</div>
	)
}
