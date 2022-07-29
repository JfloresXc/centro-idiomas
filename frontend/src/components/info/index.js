import React from "react"
import FormContact from "components/form/FormContact"
import "./info.css"

export default function Info() {
	return (
		<div className="info">
			<div className="info__message">
				Déjanos tus datos para recibir nuestras últimas novedades
			</div>
			<FormContact />
		</div>
	)
}
