
import React, {useState} from 'react'
import { ReadMore, Arrow, Pin, CloseButton, KnowMoreDark, KnowMore } from '../icons/Icons';


export const PinnedFeed = () => {
	const [isPinned, setIsPinned] = React.useState(false);
	const [expandPinFeed, setExpandPinFeed] = React.useState(false);

	const handleExpandPinFeed = () => {
		setExpandPinFeed((Prev) => !Prev );	

	}
	const handlePinnedFeed = () => {
		setIsPinned(!isPinned);	

	}

	const ShowFeedDescription = () => {
		return(
			<div className="feed-description">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. At corporis ex dolores pariatur asperiores veniam animi delectus quas nobis maxime!
			<div className="read-more">Read More</div>
		</div>
		);
	}



	return (
		<ul>
			<div className="pinned-feed-header"><Pin />Important</div>


			<div className="feed-element">
				<div className="feed-content-wrapper">
					<div className="feed-content">
						<div className="club-name">Magboard</div>
						<div className="title">Pandora quiz results</div>
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
