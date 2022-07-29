import React, { Suspense } from "react"
import Spinner from "components/spinner"
import useNearScreen from "hooks/useNearScreen"
import "./testimonial.css"

const Testimonial = React.lazy(() => import("./Testimonial"))

export default function TestimonialLazy() {
	const { isNearScreen, fromRef } = useNearScreen({ distance: "100px" })
	return (
		<div ref={fromRef} className="testimonial-lazy">
			<Suspense fallback={<Spinner />}>
				{isNearScreen && <Testimonial />}
			</Suspense>
		</div>
	)
}
