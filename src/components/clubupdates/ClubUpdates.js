import React from 'react'
import { useState, useEffect } from 'react'
import { Arrow, KnowMore, ReadMore } from '../icons/Icons'
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
				{props.description}
			<div className="read-more-button" >Read more<ReadMore /></div>
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
			<ul>
				{update.club}
				<div className="h1">Lorem, ipsum dolor.</div>
				<li>{isShow ? <Content description={update.description}/> : <></>}</li>
				<div onClick={handlePinFeed} className="pin-feed" className={(update.pinned == pinFeed ) ? addPin: removePin} ><ReadMore /></div>
			</ul>
		);
	})




	return (
		<div className="feed-box-wrapper">
			<div className="feed-box">
				<div className="feed-visible">
					<div className="heading-wrapper">
						{displayUpdate}
					</div>
					<div onClick={handleClick} className="know-more" className={isShow ? "collapse-button" : ""} ><KnowMore /></div>
				</div>
				
			</div>
		</div>
	)
}
