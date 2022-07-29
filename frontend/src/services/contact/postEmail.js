import { API_URL } from "services/settings"

export const postEmail = async ({ email, name, news }) => {
	const URL = `${API_URL}/api/contact`
	const response = await fetch(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, name, news }),
	})
	const data = await response.json()
	console.log(data)
	return { ...data }
}
