import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { PageTitle } from '../pagetitle/PageTitle'
import './AboutUs.css'
import faq from '../../data/faq.json'
import { Arrow, HandShake, LinkedIn, KnowMore } from '../icons/Icons'





export const AboutUs = () => {


	const Content = () => {


		const [isShow, setIsShow] = React.useState(false);

		const handleClick = () => {
			setIsShow(!isShow);
		}
		const DisplayData = faq.map(
			(info)=>{
				return (
					<>
							
						<div className="faq-question">
						<p>{info.question}</p>
							<div onClick={handleClick} className="know-more"><KnowMore /></div>
						</div>
					
						{isShow ? <p className="faq-answer">{info.answer}</p> : <></>}
					</>
				);
			}
		)
		return DisplayData
	}

	return (
		<div className="about-us page">
			
			
			<div className="about-us-content">
				<div className="faq">
					<h1 className="faq-title">FAQ</h1>
					<Content />
				
				</div>
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
				</div>
			
			<div className="the-team">
				<div className="creator-info">
					<div className="name">rajan</div>
					<div className="branch">SE- EnTC B</div>
					<div className="socials">
						Get Connected <a href="https://google.com" target="_blank"><LinkedIn /></a>
					</div>
				</div>
				<div className="handshake"><HandShake /></div>
				<div className="creator-info">
					<div className="name">aniket</div>
					<div className="branch">SE- mechanical</div>
					<div className="socials">
						Get Connected <a href="https://google.com" target="_blank"><LinkedIn /></a>
					</div>
				</div>

			</div>
		
		</div >
	)
}
