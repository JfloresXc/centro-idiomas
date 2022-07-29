import React from "react"
import { Link } from "wouter"
import Icon from "../hero/icon"

import "./feature.css"

export default function Feauter({
	type,
	title,
	description = "Not description",
}) {
	return (
		<div className="feature">
			<Icon type={type} />
			<div className="feature__info">
				<p className="feature__title">{title || "Inglés"}</p>
				<p className="feature__description">{description}</p>
			</div>
			<Link to="/" className="feature__button">
				Explorar{" "}
				<i className="fas fa-arrow-right feature__button-icon"></i>
			</Link>
		</div>
	)
}
