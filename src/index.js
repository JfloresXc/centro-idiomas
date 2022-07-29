import app from "./config/server"
import dotenv from "dotenv"

dotenv.config()

app.listen(app.get("port"), () => {
	console.log(`Server on port ${app.get("port")}`)
})
