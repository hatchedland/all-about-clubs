
import React, {useState} from 'react'
import { ReadMore, Arrow, Pin, CloseButton, KnowMoreDark, KnowMore } from '../icons/Icons';


export const PinnedFeed = () => {
	const [isShow, setIsShow] = React.useState(false);

	const handleKnowMore = () => {
		setIsShow(!isShow);	

	}


	function showFeedDescription () {
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
						<div className="know-more" onClick={handleKnowMore}><KnowMore /></div>
						<CloseButton />
					</div>
				</div>
				{isShow ? {showFeedDescription}: null}
			</div>

			{/* second element */}
			<div className="feed-element">
				<div className="feed-content-wrapper">
					<div className="feed-content">
						<div className="club-name">lorem</div>
						<div className="title">Lorem ipsum dolor sit amet.</div>
					</div>
					<div className="feed-content-options">
						<KnowMore />
						<CloseButton />
					</div>
				</div>
				<div className="feed-description">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. At corporis ex dolores pariatur asperiores veniam animi delectus quas nobis maxime!
					<div className="read-more">Read More</div>
				</div>
			</div>










		</ul>


	)
}
