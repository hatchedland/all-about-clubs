import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { PageTitle } from '../pagetitle/PageTitle'
import './AboutUs.css'
import faq from '../../data/faq.json'
import { Arrow, HandShake } from '../icons/Icons'





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
							<p>{info.question}</p>
						<div className="heading-wrapper">
							
							<div onClick={handleClick}><Arrow height='24' angle='30' /></div>
						</div>
					
						{isShow ? <p>{info.answer}</p> : <></>}
					</>
				);
			}
		)
		return DisplayData
	}

	return (
		<div className="about-us">
			<Navbar />
			<PageTitle title="Get Connected" />
			<div className="about-us-content">
				<div className="faq">
					<Content />
				</div>


				<div className="subscribe">
					<p>Subscribe for regular updates</p>
					<div className="email-form">
						<input type="email" placeholder="Enter your email here" />
						<div className="submit" style={{ transform: 'rotate(-90deg)' }}><Arrow style={{}} /></div>
					</div>
				</div>
			</div>
			<div className="the-team">
				<div className="creater-info">
					<div className="name">rajan</div>
					<div className="branch">SE- EnTC B</div>
					<div className="socials">
						Get Connected <a href="https://google.com" target="_blank">Linkedin</a>
					</div>
				</div>
				<HandShake />
				<div className="creater-info">
					<div className="name">aniket</div>
					<div className="branch">SE- mechanical</div>
					<div className="socials">
						Get Connected <a href="https://google.com" target="_blank">Linkedin</a>
					</div>
				</div>

			</div>
		
		</div >
	)
}
