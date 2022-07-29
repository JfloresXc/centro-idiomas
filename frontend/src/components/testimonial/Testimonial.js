import React from 'react'
import Carousel from '../carousel'

import './testimonial.css'

export default function Testimonial() {
    return (
        <div className="testimonial">
            <div className="testimonial__heading">
                <h1 className="testimonial__title">Nuestros clientes dicen</h1>
                <p className="testimonial__description">
                    Hemos estado trabajando con clientes de todo el Perú
                </p>
            </div>
            <Carousel />
        </div>
    )
}