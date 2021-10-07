import React from 'react'
import { Link, BrowserRouter as Router} from 'react-router-dom'
import { AboutUs } from '../aboutus/AboutUs';
import { Club } from '../club/Club';
import { Logo } from '../icons/Icons';
import './Navbar.css'

export const Navbar = () => {
	return (
		<div className='header'>
			<div className="logo"><Link exact to='/'><Logo /></Link></div>
			<div className="navbar">
				<ul>
					<li className="home"><Link to="/feed"><strong>News Feed</strong></Link></li>
					<li className="home"><Link to="/About">About Us</Link></li>
				</ul>
			</div>

	
		</div>
	)
}
