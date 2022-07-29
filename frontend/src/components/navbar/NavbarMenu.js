import { ButtonClick } from "components/button"

export function NavbarMenu({ handleClick }) {
	return (
		<nav className="navbar navbar-gray">
			<div className="navbar__list-up">
				<ButtonClick
					message="Cerrar sesión"
					type="purple"
					handleClick={handleClick}
				/>
			</div>
		</nav>
	)
}
