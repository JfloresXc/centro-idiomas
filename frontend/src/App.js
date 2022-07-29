import { Switch, Route, Redirect } from "wouter"
import { useContext } from "react"
import { useAlert } from "hooks/useAlert"
import UserContext from "contexts/UserContext"

import Home from "pages/home"
import Contacto from "pages/contact"
import Alumno from "pages/alumno"
import Menu from "pages/menu"
import SignUp from "pages/signup"
import Alert from "components/alert"

import "./App.css"
import "animate.css"

function App() {
	const { user } = useContext(UserContext)
	const { jwt } = user
	const { alert } = useAlert()
	const { message, success, activated } = alert

	return (
		<>
			<Switch className="App">
				<Route path="/" component={Home} />
				<Route path="/contacto" component={Contacto}></Route>
				<Route path="/alumno/login">
					{!jwt ? <Alumno /> : <Redirect to="/alumno/menu" />}
				</Route>
				<Route path="/alumno/menu">
					{jwt ? <Menu /> : <Redirect to="/alumno/login" />}
				</Route>
				<Route path="/alumno/signup" component={SignUp}></Route>
				<Route path="/alumno/signup" component={SignUp}></Route>
				<Route path="/:rest*">
					<Redirect to="/" />
				</Route>
			</Switch>
			{activated && (
				<Alert
					message={message}
					design={success ? "primary" : "danger"}
				/>
			)}
		</>
	)
}

export default App
