import React, { useState } from 'react'
import { PageTitle } from '../pagetitle/PageTitle'
import { Arrow, BackToHome, Email, Facebook, Instagram, LinkedIn, Website } from '../icons/Icons'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './Club.css'
import { LatestFeed } from './LatestFeed'
import { Staffs } from './Staffs'
import { About } from './About'
import { Event } from './Event'




const ToggleMenu = () => {

	const [isToggle, setIsToggle] = React.useState(false);
	const NavOpen = () => {
		return (
			<div className="club-page-navigation">
				<ul className="nav-items">
					<Link exact to="/"><BackToHome /></Link>
					<Link to="/fee/feed"><li>Latest post</li></Link>
					<Link to="/fee/staffs"><li>Staffs</li></Link>
					<Link to="/fee/events"><li>Events</li></Link>
					<Link to="/fee/about"><li>About</li></Link>
				</ul>
				<div className="email"><PageTitle title="Send your content here" /><Email /></div>
				<ul className="nav-socials">
					<a href=""><li><Instagram /></li></a>
					<a href=""><li><Facebook /></li></a>
					<a href=""><li><LinkedIn /></li></a>
					<a href=""><li><Website /></li></a>
				</ul>
			</div>
		)
	}
	const NavClose = () => {
		console.log("hey")
		return (
			<div className="club-page-navigation">
			 <button className="hamburger">Hamburger{}</button>
			</div>
		)
	}
	
	return (
		<div>
			<NavClose onClick={() => !setIsToggle }/>
			{/* {(window.innerWidth>=1200) ? <NavOpen /> : <NavClose />} */}
			{ (isToggle) ? <NavOpen /> : null }
		</div>
	)
}

export const Club = () => {

	return (
		<div className="club-content">
			<ToggleMenu />
			<div className="club-info">
				<div className="club-name"><div className="page-title-wrapper"><PageTitle title="MagBoard" /></div><Arrow /></div>
				<Route path="/fee/feed" component={LatestFeed} />
				<Route path="/fee/events" component={Event} />
				<Route path="/fee/staffs" component={Staffs} />
				<Route path="/fee/about" component={About} />
			</div>
		</div>
	)
}
