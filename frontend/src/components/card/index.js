import React from "react"

import skin from "storage/skin.jpg"
import "./card.css"

function Card({ title, description, name, work }) {
	const numberRandom = Math.floor(Math.random() * 100)

	return (
		<div className="card">
			<div className="card__header">
				<h3 className="card__title">{title}</h3>
				<p className="card__description">{description}</p>
			</div>
			<div className="card__body">
				<img
					src={
						`https://randomuser.me/api/portraits/men/${numberRandom}.jpg` ||
						skin
					}
					loading="lazy"
					alt={`skin-${numberRandom}`}
					className="card__skin animate__animated animate__bounceIn"
				/>
				<p className="card__author-name">{name}</p>
				<p className="card__work-name">{work}</p>
			</div>
		</div>
	)
}

export default React.memo(Card)
