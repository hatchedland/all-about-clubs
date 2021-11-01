import React from 'react'
import { useState, useEffect } from 'react'
import { Arrow, KnowMore, Pin, ReadMore } from '../icons/Icons'
import './ClubUpdates.css'
import axios from 'axios'
import updates from '../../data/updates.json'
import { UpdateBox } from './UpdateBox'



export const ClubUpdates = (props) => {
	const [isShow, setIsShow] = React.useState(false);

	const handleClick = () => {
		setIsShow(!isShow);
	}



	const displayUpdate = updates.map((update) => {
		return (
			<UpdateBox update={update.update} club={update.club} description={update.description} pinned={update.pinned} id={update.id}/>
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
