import React, { useRef } from "react"
import { Link as LinkScroll } from "react-scroll"
import { Link as LinkWouter } from "wouter"
import { getLink } from "libs"

export default function Links({ links, reference, classes }) {
	const linkRef = useRef()
	return (
		<ul className={`${classes} navbar__list`} ref={reference}>
			{links.map((linkKey = "", index) => {
				const isLinkScroll = linkKey[0] === "#"

				return (
					<li className="navbar__list-item" key={index}>
						{isLinkScroll ? (
							<LinkScroll
								className="navbar__link"
								to={linkKey.slice(1)}
								spy={true}
								smooth={true}
								offset={-50}
								duration={500}
							>
								{getLink(linkKey)}
							</LinkScroll>
						) : (
							<LinkWouter
								className="navbar__link"
								to={`${linkKey}`}
							>
								{getLink(linkKey)}
							</LinkWouter>
						)}
					</li>
				)
			})}
		</ul>
	)
}
