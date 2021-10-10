import React from 'react'
import { Hello, Arrow, AIT, Magazine, God, Dance, Stage, Radio, Robot, Contribution, Sports, Battery, Leaf, Terminal, Cycle, Heart } from '../icons/Icons'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

export const HomeContent = () => {
	return (
		<div className="home-content">
			<div className="site-description">

				<div className="greeting-text">
					<Hello /> Hi, great to see you here. Getting involved in an extracurricular club could be one of the highlights of your time in College.
				</div>

				<div className="club-wrapper">
					<div className="club-tagline">we publish <br />magazines</div><span className="link-to-club"><Link to='/fee/feed'><strong>@Magboard</strong></Link></span>
					<Magazine />
				</div>
				<span className="white-space"></span>
				<div className="club-wrapper">
					<div className="club-tagline">improve <br />technical</div>abilities<span className="link-to-club"><Link to='/fee/feed'><strong>@Technical Board</strong></Link></span>
				</div>
				<span className="white-space"></span>
				<div className="club-wrapper">
					<span className="link-to-club"><Link to='/fee/feed'><strong>@Spiritual Club</strong></Link></span>	<div className="club-tagline">may be a <br />step closer</div> to<God />
				</div>
				<span className="white-space"></span>
				<div className="club-wrapper">
					<Dance /> <div className="club-tagline">.groove<br /> fall in </div> &
					<Heart /> <div className="club-tagline">with <br /> cultural</div> Fests<span className="link-to-club"><Link to='/fee/feed'><strong>@Cultural Board</strong></Link></span>.
				</div>
				<span className="white-space"></span>
				<div className="club-wrapper">
					<span className="link-to-club"><Link to='/fee/feed'><strong>@DDQ Club</strong></Link></span>
					<Stage />
					<div className="club-tagline">we welcomes <br />opinions with</div> drama.
				</div>
				<span className="white-space"></span>
				<div className="club-wrapper">
					<div className="club-tagline">tune into the  <br /> melody of </div>Your
					<Heart />
					<div className="club-tagline">while <br /> using</div>
					<span className="link-to-club"><Link to='/fee/feed'><strong>@Radio Raga</strong></Link></span><Radio />
					<div className="club-tagline">as a  <br />headstart. </div>
				</div>
				<span className="white-space"></span>
				<div className="club-wrapper">
					<span className="white-space"></span><Robot />
					<div className="club-tagline">Robo  <br />war </div>
					<span className="link-to-club"><Link to='/fee/feed'><strong>@Robotics Club</strong></Link></span>
				</div>
				<span className="white-space"></span>
				<div className="club-wrapper">
					<div className="club-tagline">.Fun Fact : Aryabhatt <br /> was also a member of</div>
					<span className="link-to-club"><Link to='/fee/feed'><strong>@Maths Club</strong></Link></span>.
				</div>
				<span className="white-space"></span>
				<div className="club-wrapper">
					<div className="club-tagline">Assist and & serve <br />  above ourselves</div>
					<span className="link-to-club"><Link to='/fee/feed'><strong>@NSS Club</strong></Link></span><Contribution />.
				</div>
				<span className="white-space"></span>
				<div className="club-wrapper">
					<div className="club-tagline">"Stamina <br /> Matters"</div>~
					<span className="link-to-club"><Link to='/fee/feed'><strong> Sport Club</strong></Link></span><Sports />
				</div>
				<span className="white-space"></span>
				<div className="club-wrapper">
					<div className="club-tagline">.Love co-<br />ntributing?</div>here
					<span className="link-to-club"><Link to='/fee/feed'><strong>@ Open Source Club </strong></Link></span>.
				</div>
				<span className="white-space"></span>
				<div className="club-wrapper">
					<div className="club-tagline">Chetak now<br /> operates on</div>
					<Battery /><div className="club-tagline">find <br />out</div>how
					<span className="link-to-club"><Link to='/fee/feed'><strong>@SAE Club</strong></Link></span>.
				</div>
				<span className="white-space"></span>
				<div className="club-wrapper">
					<Leaf /><div className="club-tagline">is <br />lovely,</div> so is
					<span className="link-to-club"><Link to='/fee/feed'><strong>@Natures Club</strong></Link></span>.
				</div>
				<span className="white-space"></span>
				<div className="club-wrapper">
					<div className="club-tagline"> got Stuck <br />in test cases?</div>
					<span className="link-to-club"><Link to='/fee/feed'><strong>@Coding Club</strong></Link></span>
					<div className="club-tagline">got <br />your back.</div> :)
				</div>
				<span className="white-space"></span>
				<div className="club-wrapper">
					<div className="club-tagline">Thats all,the track ends<br />here, continue your ride with</div>
					<span className="link-to-club"><Link to='/fee/feed'><strong>@Cycling Club</strong></Link></span> <Cycle />.
				</div>
			</div>

			<div className="explore">Latest Feed<Arrow /></div>
		</div>
	)
}
