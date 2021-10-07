import React from 'react'
import { PageTitle } from '../pagetitle/PageTitle'
import { Navbar } from '../navbar/Navbar'
import { Facebook, Instagram, LinkedIn, Website } from '../icons/Icons'


// import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './Club.css'
import { LatestFeed } from './LatestFeed'
import { Staffs } from './Staffs'
import { About } from './About'
import { Event } from './Event'

export const Club = () => {

	return (
		<div className="club-content">
			<Navbar />
			<PageTitle title="Magboard" />
		
					<div className="club-page-navigation">
						<ul className="nav items">
							<li><Link to="/fee/feed">Latest post</Link></li>
							<li><Link to="/fee/staffs">Staffs</Link></li>
							<li><Link to="/fee/events">Events</Link></li>
							<li><Link to="/fee/about">About</Link></li>
						</ul>
						<ul className="nav socials">
							<li><Instagram /></li>
							<li><Facebook /></li>
							<li><LinkedIn /></li>
							<li><Website /></li>
						</ul>
					</div>
					<div className="club-info">

						<Route path="/fee/feed" component={LatestFeed} />
						<Route path="/fee/events" component={Event} />
						<Route path="/fee/staffs" component={Staffs} />
						<Route path="/fee/about" component={About} />

					</div>
			

		</div>
	)
}
