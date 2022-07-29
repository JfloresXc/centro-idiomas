const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: "jfloresxc@gmail.com",
		pass: "hfaasveuxhmzzvic",
	},
})

transporter.verify().then(() => {
	console.log("Ready for send emails")
})

export { transporter }
