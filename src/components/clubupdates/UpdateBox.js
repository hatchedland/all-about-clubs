import React, {useState} from 'react'
import { KnowMore, Pin } from '../icons/Icons';

export const UpdateBox = (props) => {


	const [viewMore, setViewMore] = React.useState(false);
	
	const [pinFeed, setPinFeed] = React.useState(false);


	const Content = (props) => {
		return (
			<div className="feed-not-visible">
				<div className="update-description">{props.description}</div>
				<div className="read-more">Read more</div>
			</div>
		);
	}

	

	const addPin = () => {
		/*
		render data here 
		*/
		return <h1>test1</h1>
	}

	const removePin = () => {
		/*
		render data here 
		*/
		return <h1>test2</h1>
	}

	function handleViewMore(){
		setViewMore(!viewMore);
	}

	function handlePinFeed() {
		setPinFeed(!pinFeed)
		console.log("penis")

	}

	return (
		<div>
				<div className="feed-box">
				
				<div className="feed-visible" style={(props.id %2 == 0) ? {backgroundColor: '#222'}: null}>
					<div className="heading-wrapper">
						<div className="club-update">{props.update}</div>
						<div className="club-name">{props.club}</div>
					</div>
					<div className="feed-options">
						<div onClick={handleViewMore} className="know-more" className={viewMore ? "collapse-button" : ""} ><KnowMore /></div>
						<div onClick={handlePinFeed} className="pin-feed" className={(pinFeed == true) ? addPin : removePin} >	<Pin />{Content}</div>
					</div>
				</div>
				<div>{viewMore ? <Content description={props.description} /> : <></>}</div>
			</div>
		</div>
	)
}
