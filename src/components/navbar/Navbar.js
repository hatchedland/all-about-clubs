import React from 'react'
import { Link, BrowserRouter as Router} from 'react-router-dom'
import { AboutUs } from '../aboutus/AboutUs';
import { Club } from '../club/Club';
import './Navbar.css'

export const Navbar = () => {
	return (
		<div className='header'>
			<div className="logo">Logo</div>
			<div className="navbar">
				<ul>
					<li className="home"><Link to="/feed">News Feed</Link></li>
					<li className="home"><Link to="/About">About Us</Link></li>
				</ul>
			</div>

	
		</div>
	)
}
