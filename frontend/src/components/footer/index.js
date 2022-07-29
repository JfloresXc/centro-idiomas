import React from "react";
import { Link } from "wouter";
import ListIcons from "../list-icons";
import Logo from "../logo";

import "./footer.css";

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer__up">
				<div className="footer__list">
					<div className="footer__brand">
						<Logo />
						<h6 className="footer__brand-heading">
							Centro Idiomas
						</h6>
					</div>
					<p className="footer__description">
						Impartimos cursos de inglés, portugués y francés
						en los niveles básico, intermedio y avanzado, en
						los sistemas regular e intensivo.
					</p>
					<ListIcons size="small" />
				</div>
				<ul className="footer__list">
					<h6 className="footer__heading6">Enlaces Rápidos</h6>
					<li className="footer__list-item">
						<Link to="" className="footer__link">
							Untels
						</Link>
					</li>
					<li className="footer__list-item">
						<Link to="" className="footer__link">
							Precios
						</Link>
					</li>
					<li className="footer__list-item">
						<Link to="" className="footer__link">
							Creador
						</Link>
					</li>
					<li className="footer__list-item">
						<Link to="" className="footer__link">
							Solicitudes
							<span className="footer__joke">
								{" "}
								estamos contratando
							</span>
						</Link>
					</li>
				</ul>
				<ul className="footer__list">
					<h6 className="footer__heading6">Servicios</h6>
					<li className="footer__list-item">
						<Link to="" className="footer__link">
							Nivelación
						</Link>
					</li>
					<li className="footer__list-item">
						<Link to="" className="footer__link">
							Talleres
						</Link>
					</li>
					<li className="footer__list-item">
						<Link to="" className="footer__link">
							Exámenes Internacionales
						</Link>
					</li>
					<li className="footer__list-item">
						<Link to="" className="footer__link">
							Conversatorios
						</Link>
					</li>
					<li className="footer__list-item">
						<Link to="" className="footer__link">
							Convenios Internacionales
						</Link>
					</li>
				</ul>
				<ul className="footer__list">
					<h6 className="footer__heading6">Contáctanos</h6>
					<li className="footer__list-item-description">
						<i className="fas fa-mobile-alt"></i>
						<p> 715-8878 anexo 144</p>
					</li>
					<li className="footer__list-item-description">
						<i className="far fa-envelope"></i>
						<p>centro_de_idiomas @untels.edu.pe</p>
					</li>
					<li className="footer__list-item-description">
						<i className="fas fa-map-marker-alt"></i>
						<p>
							{" "}
							Av. Bolívar S/N, sector 3 grupo 1, mz. A,
							sublote 3 - Villa El Salvador
						</p>
					</li>
				</ul>
			</div>
			<div className="footer__down">
				<p className="footer__duties">
					© 2020 Landify UI Kit. All rights reserved
				</p>
				<ul className="footer__list footer__list-row">
					<li className="footer__list-item">
						<Link
							to=""
							className="footer__link footer__link-small"
						>
							Terms & Conditions
						</Link>
					</li>
					<li className="footer__list-item">
						<Link
							to=""
							className="footer__link footer__link-small"
						>
							|
						</Link>
					</li>
					<li className="footer__list-item">
						<Link
							to=""
							className="footer__link footer__link-small"
						>
							Privacy Policy
						</Link>
					</li>
					<li className="footer__list-item">
						<Link
							to=""
							className="footer__link footer__link-small"
						>
							|
						</Link>
					</li>
					<li className="footer__list-item">
						<Link
							to=""
							className="footer__link footer__link-small"
						>
							Sitemap
						</Link>
					</li>
					<li className="footer__list-item">
						<Link
							to=""
							className="footer__link footer__link-small"
						>
							|
						</Link>
					</li>
					<li className="footer__list-item">
						<Link
							to=""
							className="footer__link footer__link-small"
						>
							Disclaimer
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
