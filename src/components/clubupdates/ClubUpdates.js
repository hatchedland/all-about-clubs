import React from 'react'
import { useState, useEffect } from 'react'
import { Arrow, KnowMore, ReadMore } from '../icons/Icons'
import './ClubUpdates.css'
import axios from 'axios'


export const ClubUpdates = (props) => {
	const [isShow, setIsShow] = React.useState(false);

	const handleClick = () => {
		setIsShow(!isShow);
	}

	const Content = () => {
		return (
			<div className="feed-not-visible">
				<h4 className="more-info"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusantium soluta deleniti magni qui autem dolorum. Eius quis labore, autem sint minus optio aperiam ex doloribus quaerat fuga pariatur sunt!</h4>
				<div className="read-more-button" >Read more<ReadMore /></div>
			</div>
		);
	}

	return (
		<div className="feed-box-wrapper">
			<div className="feed-box">
				<div className="feed-visible">
					<div className="heading-wrapper">
						<h1 className="heading">Jt sec forms out now</h1>
						<h3 className="club-title">Magboard	</h3>
					</div>
					<div onClick={handleClick} className="know-more" className={isShow ? "collapse-button" : "" } ><KnowMore /></div>
				</div>
				{isShow ? <Content/> : <></>}
			</div>
		</div>
	)
}
