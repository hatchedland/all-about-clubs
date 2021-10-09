import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { PageTitle } from '../pagetitle/PageTitle'
import './AboutUs.css'
import faq from '../../data/faq.json'
import { Arrow, HandShake, LinkedIn, KnowMore } from '../icons/Icons'
import Faqpost from './FaqPost'





export const AboutUs = () => {

	const Content = () => {

		const [isShow, setIsShow] = React.useState(false);

		const DisplayData = faq.map(
			(info) => {
				return <Faqpost id={info.id} question={info.question} answer={info.answer} />
			}
		)
		return DisplayData
	}

	return (
		<div className="about-us-content">

			<div className="faq">
				<h1 className="faq title">FAQ</h1>
				<Content />
			</div>

			<div className="connection">

				<div className="getconnected-wrapper">
					<div className="connection-title-wrapper"><PageTitle title="Get Connected" /></div>
					<div className="subscribe">
						<p className="subscribe-label">Subscribe for regular updates</p>
						<div className="email-form">
							<input type="email" placeholder="Enter your email here" />
							<div className="submit">Submit</div>
						</div>
					</div>
				</div>


				<div className="website-by">
					<PageTitle title="Developers" />
					<div className="the-team">
						
						<div className="name"><a href="https://google.com" target="_blank">rajan</a></div>
						&
						<div className="name"><a href="https://google.com" target="_blank">aniket</a></div>

					</div>

				</div>
			</div>


		</div>
	)
}
