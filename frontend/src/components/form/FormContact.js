import React, { useState } from "react"
import { Input, TextArea } from "components/input"
import { ButtonSubmit } from "components/button"
import { useForm } from "react-hook-form"
import { useAlert } from "hooks/useAlert"
import { postEmail } from "services/contact/postEmail"
import "./form.css"

export default function FormContact({ title = "Contacto" }) {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm()
	const { setAlertTime } = useAlert()
	const [isLoading, setLoading] = useState(false)

	const submitEvent = async (data) => {
		const { nombres, correo } = data
		setLoading(true)
		const news =
			"CENTRO DE IDIOMAS DE LA UNTELS te ofrece la posibilidad de continuar estudiando inglés, frances y portugues, para que puedas cumplir con tus objetivos de dominar otro idioma. Hemos adaptado nuestra metodología para que puedas seguir asistiendo a clases, de manera 100% online, desde la comodidad de tu casa y contando con la presencia permanente y seguimiento de un profesor durante las sesiones."
		const response = await postEmail({
			email: correo,
			name: nombres,
			news,
		})
		setLoading(false)
		let message

		if (response.error) message = "¡ Error al enviar !"
		else message = "¡ Enviado satisfactoriamente !"

		setAlertTime({
			message,
			success: true,
		})
		reset()
	}

	return (
		<div id="form__wrap-contact">
			<div className="form__title">{title}</div>
			<form
				className="form form-contact"
				onSubmit={handleSubmit(submitEvent)}
			>
				<Input
					name="nombres"
					placeholder="Ingresa tu nombre"
					errors={errors}
					register={register}
				/>
				<Input
					name="correo"
					placeholder="Ingresa tu correo"
					errors={errors}
					register={register}
				/>
				<TextArea
					name="mensaje"
					placeholder="Ingresa un mensaje"
					errors={errors}
					register={register}
				/>
				<div className="form__button-submit">
					<ButtonSubmit
						message={isLoading ? "Loading..." : "Enviar"}
						type="purple"
					/>
				</div>
			</form>
		</div>
	)
}
