import React from "react"
import Card from "../card"
import Slider from "react-slick"

import "./carousel.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const FIRSTNAMES = [
	"Adrián",
	"Agustín",
	"Alberto",
	"Alejandro",
	"Alexander",
	"Alexis",
	"Alonso",
	"Andrés",
]
const LASTNAMES = [
	"Garcia",
	"Gonzalez",
	"Rodriguez",
	"Fernandez",
	"Lopez",
	"Martinez",
	"Sanchez",
	"Perez",
	"Gomez",
]
const DESCRIPTIONS = [
	"Aprendí Inglés de la mejor manera, mil gracias Centro Idiomas.",
	"Mi ruso es espectacular y tan solo en poco tiempo. Agradecido al ciento por ciento.",
	"Genial !! Todos es genial en este centro. Mi quechua es buenisimo gracias a ustedes.",
	"Nunca pensé que aprendería tan rápido alemán, recomendadisimos.",
	"Pensé nunca aprender inglés porque se me complicaba demasiado, pero aquí lo aprendí super rápido.",
	"El método Yauricasa es el mejor. Aprendí Francés y de la mejor manera.",
]
const TITLES = [
	"! Enhorabuena !",
	"Grande método Yauricasa",
	"Inglés para todos, sí",
	"Legiones perfectas",
	"Mis amigos del Centro",
	"Francés para el mundo",
]
const WORKS = [
	"Gerente Tottus",
	"Rector Untels",
	"Estudiante de Astronomía",
	"SEO Google",
	"Diseñador UX",
	"Abogado Fexl",
]

export default function Carousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		centerPadding: "60px",
		arrows: false,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	}

	return (
		<Slider {...settings}>
			{Array.from({ length: 6 }).map((_, index) => {
				// console.log(FIRSTNAMES[index])
				return (
					<Card
						name={`${FIRSTNAMES[index]} ${LASTNAMES[index]}`}
						title={TITLES[index]}
						description={DESCRIPTIONS[index]}
						work={WORKS[index]}
						key={index}
					/>
				)
			})}
		</Slider>
	)
}
