import React from "react"
import ReactDOM from "react-dom"
import { UserContextProvider } from "contexts/UserContext"
import AlertContext from "contexts/AlertContext"
import "./normalize.css"
import App from "./App"

ReactDOM.render(
	<React.StrictMode>
		<UserContextProvider>
			<AlertContext>
				<App />
			</AlertContext>
		</UserContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
