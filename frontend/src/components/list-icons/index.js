import React from "react";

import "./listicons.css";

const SIZE = ["small", "medium", "high"];

function Icon({ link = "/", iconName = "fa-instagram" }) {
	return (
		<li className="list-icons__circle">
			<a href={link} target="_blank" rel="noreferrer">
				<i className={`fab ${iconName} list-icons__icon`}></i>
			</a>
		</li>
	);
}

export default function ListIcons({ size = SIZE[1] }) {
	const setSize = (size) => {
		if (size === SIZE[0]) return "list-icons__small";
		if (size === SIZE[1]) return "";
		if (size === SIZE[2]) return "list-icons__high";
	};

	return (
		<ul className={`list-icons ${setSize(size)}`}>
			<Icon
				link="https://www.instagram.com/untelsoficial/"
				iconName="fa-instagram"
			/>
			<Icon
				link="https://www.facebook.com/idiomasuntelsoficial/about/?ref=page_internal"
				iconName="fa-facebook"
			/>
			<Icon
				link="https://twitter.com/?lang=es"
				iconName="fa-twitter"
			/>
			<Icon link="https://www.youtube.com/" iconName="fa-youtube" />
		</ul>
	);
}
