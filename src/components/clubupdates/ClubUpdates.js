import React from 'react'
import { useState, useEffect } from 'react'
import { Arrow, KnowMore, Pin, ReadMore } from '../icons/Icons'
import './ClubUpdates.css'
import axios from 'axios'
import updates from '../../data/updates.json'



export const ClubUpdates = (props) => {
	const [isShow, setIsShow] = React.useState(false);
	const [pinFeed, setPinFeed] = React.useState(false);

	const handleClick = () => {
		setIsShow(!isShow);
	}


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
	}

	const removePin = () => {
		/*
		render data here 
		*/
	}


	function handlePinFeed(event) {

		setPinFeed(!pinFeed)

	}


	const displayUpdate = updates.map((update) => {
		return (
			<div className="feed-box">
				
				<div className="feed-visible">
					<div className="heading-wrapper">
						<div className="club-update">{update.update}</div>
						<div className="club-name">{update.club}</div>
					</div>
					<div className="feed-options">
						<div onClick={handleClick} className="know-more" className={isShow ? "collapse-button" : ""} ><KnowMore /></div>
						<div onClick={handlePinFeed} className="pin-feed" className={(update.pinned == pinFeed) ? addPin : removePin} >	<Pin />{Content}</div>
					</div>
				</div>
				<div>{isShow ? <Content description={update.description} /> : <></>}</div>
			</div>
		);
	})
	return (
		<div className="feed-box-wrapper">
			<div>
					{displayUpdate}
			</div>
		</div>
	)
}
