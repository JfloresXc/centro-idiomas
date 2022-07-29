const app = require("./dist/config/server")
const dotenv = require("dotenv")

dotenv.config()

app.listen(app.get("port"), () => {
	console.log(`Server on port ${app.get("port")}`)
})
