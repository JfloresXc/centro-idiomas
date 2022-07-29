import { transporter } from "../config/mail"
const controller = {}

controller.sendEmailToUser = async (req, res) => {
	try {
		const { name, news, email } = req.body

		await transporter.sendMail({
			from: "Centro Idiomas <centroidiomas@untels.edu.pe>",
			to: email,
			subject: `Hola ${name}. Centro de idiomas te informa 👩‍🏫`,
			html: `
				<h3>Novedades</h3>
				<b>${news}</b>
			`,
		})

		res.status(200).json({ success: true })
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: error.message })
	}
}

export { controller }
