import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MySwal = withReactContent(Swal)

export const useAlert = ({ padding = "1em", timer = 2000 } = {}) => {
	const errorMessage = ({ message }) => {
		MySwal.fire({
			title: message,
			icon: "error",
			showConfirmButton: false,
			timer,
			padding,
		})
	}

	const successMessage = ({ message }) => {
		MySwal.fire({
			title: message,
			icon: "success",
			showConfirmButton: false,
			timer,
			padding,
		})
	}

	return {
		errorMessage,
		successMessage,
	}
}
