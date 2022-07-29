import React from "react"
import Feauter from "../feature"
import { ButtonLink } from "../button"

import "./features.css"

const LANGUAGES = [
	{
		title: "Inglés",
		description:
			"¡Bienvenido a tu Curso de Inglés Una gran comunidad donde podrás aprender y practicar el idioma inglés de una forma fácil y divertida. Sigue las clases de inglés paso a paso, aprende verbos y refuerza tu vocabulario, practica y ponte a prueba con los ejercicios. Regístrate y haz un seguimiento de tus avances en el curso.",
	},
	{
		title: "Francés",
		description:
			"Cuando quieras y desde donde quieras. Con estos cursos podrás aprender francés sin tener que asistir de manera presencial a clase. Tan sólo necesitas conexión a Internet y un ordenador, tableta o smartphone.",
	},
	{
		title: "Portugués",
		description:
			"Curso de Portugués. podrás aprender el idioma de una manera innovadora y eficaz, sin tener que asistir de manera presencial a clase.",
	},
	{
		title: "Quechua",
		description:
			"El quechua es una lengua hablada por más de ocho millones de latinoamericanos y al menos por cuatro millones de peruanos en sus diversas variedades. Aprende Quechua con nuestra modalidad especial no presencial.",
	},
	{
		title: "Alemán",
		description:
			"Contamos con docentes altamente calificados y con larga experiencia en la enseñanza del alemán como lengua extranjera. El instituto ofrece cursos de alemán para todos los niveles, desde el nivel A1 hasta C2. Asimismo brinda clases particulares de alemán adaptadas a las necesidades y deseos del alumno. ",
	},
	{
		title: "Ruso",
		description:
			"Bienvenido a nuestro curso de lengua rusa. Hemos creado 14 lecciones para que descubras este maravilloso idioma y puedas tener un primer contacto con él. En otras palabras, aquí no encontrarás largas lecciones con explicaciones interminables sobre gramática.",
	},
]

export default function Features() {
	return (
		<div className="features" id="idiomas">
			<p className="features__title">Nuestros idiomas</p>
			<ul className="features_list">
				{LANGUAGES.map((languageKey, index) => {
					return (
						<Feauter
							key={index}
							type={index < 3 ? "subject" : "trait"}
							{...languageKey}
						/>
					)
				})}
			</ul>
			{/* <div className="features__button">
				<ButtonLink
					message={`Explorar Todo`}
					icon={true}
				></ButtonLink>
			</div> */}
		</div>
	)
}
