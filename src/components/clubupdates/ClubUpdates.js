import React from 'react'
import { useState, useEffect } from 'react'
import { Arrow } from '../icons/Icons'
import './ClubUpdates.css'
import axios from 'axios'







export const ClubUpdates = (props) => {
	const [isShow, setIsShow] = React.useState(false);

	const handleClick = () => {
		setIsShow(!isShow);
	}


	const Content = () => {
		return <h1>pp</h1>;
	}



	return (
		<div className="feed-box-wrapper">
			<div className="feed-box">
				<div className="heading-wrapper">
		



				<h2 className="club-title">
					This is some serious issue
				</h2>

				<div onClick={handleClick}><Arrow height='24' angle='30'/></div>
				</div>
				{isShow ? <Content content='nothing'/> : <></>}
			
		
			</div>
		</div>
	)
}
