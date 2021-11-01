
import React, {useImperativeHandle, useState} from 'react'
import { ReadMore, Arrow, Pin, CloseButton, KnowMoreDark, KnowMore } from '../icons/Icons';
import { ClubUpdates } from '../clubupdates/ClubUpdates';
import { UpdateBox } from '../clubupdates/UpdateBox';
import updates from '../../data/updates.json'



export const PinnedFeed = (props) => {
	const [isPinned, setIsPinned] = React.useState(false);
	const [expandPinFeed, setExpandPinFeed] = React.useState(false);

	const handleExpandPinFeed = () => {
		setExpandPinFeed((Prev) => !Prev );	

	}
	const handlePinnedFeed = () => {
		setIsPinned(!isPinned);	

	}

	const ShowFeedDescription = (props) => {
		return(
			<div className="feed-description">
				{props.ShowFeedDescription}
		<div className="read-more">Read More</div>
		</div>
		);
	}


	// idk man I quit

	// if(isPinned){
	// 	const updateContent = props.map((props) => {
	// 		return <h1>{props.club}</h1>
	// 	})
	
	// }



	return (
		<ul>
			<div className="pinned-feed-header"><Pin />Important</div>


			<div className="feed-element">
				<div className="feed-content-wrapper">
					<div className="feed-content">
						<div className="club-name">updateContent</div>
						<div className="title">{props.description}</div>
					</div>
					<div className="feed-content-options">
						<div className="know-more" onClick={handleExpandPinFeed}><KnowMore /></div>
						<div className="remove-pin" onClick={handlePinnedFeed}>	<CloseButton /></div>
					</div>
				</div>
				{expandPinFeed ? <ShowFeedDescription />: null}
			</div>



		</ul>


	)
}
