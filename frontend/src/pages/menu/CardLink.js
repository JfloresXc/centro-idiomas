import React from "react"
import { Link } from 'wouter'

import './card-link.css'

export default function CardLink({
    title = 'Not title',
    description = 'Not description',
    src
}) {
    return (
        <Link to="" className="card-link">
            {/* <div className="card-link__header"> */}
            {/* </div> */}
            {/* <div className="card-link__body"> */}
                <h3 className="card-link__title">{title}</h3>
                <p className="card-link__description">{description}</p>
                <img className="card-link__img" src={src} alt={description} />
            {/* </div> */}
        </Link>
    )
}