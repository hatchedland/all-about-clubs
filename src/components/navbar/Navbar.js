import React from 'react'
import './Navbar.css'

export const Navbar = () => {
	return (
		<div className='header'>
			<div className="logo">Logo</div>
			<div className="navbar">
				<ul>
					<li className="home">News Feed</li>
					<li className="latest-post">About Us</li>
				</ul>
			</div>
		</div>
	)
}
