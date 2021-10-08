import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { AboutUs } from '../aboutus/AboutUs';
import { Club } from '../club/Club';
import { BackToHome } from '../icons/Icons';
import { PageTitle } from '../pagetitle/PageTitle'
import './Navbar.css'


export const Navbar = () => {
	return (
		<div className="navbar">
			<div className="back-to-home"><Link exact to='/'><BackToHome /></Link></div>
			<PageTitle title="Club Name"/>
		</div>

	)
}
