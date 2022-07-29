import { useRef } from "react"

export const useNav = () => {
	const navbarRef = useRef(null)
	const iconRef = useRef(null)

	const handleChange = (e) => {
		const { checked } = e.target
		if (checked) {
			navbarRef.current.classList.add("navbar__list-down-visible")
			iconRef.current.classList.remove("fa-bars")
			iconRef.current.classList.add("fa-times")
		} else {
			navbarRef.current.classList.remove("navbar__list-down-visible")
			iconRef.current.classList.remove("fa-times")
			iconRef.current.classList.add("fa-bars")
		}
	}

	return {
		navbarRef,
		iconRef,
		handleChange,
	}
}
