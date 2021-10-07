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
			<div>
				<h4> You did what was right. whatever she was bad at bj</h4>
				<div className="read-more-button" >Read more<ReadMore /></div>
			</div>

		);
	}

	if (isShow) {
		const styles = {
			transform: 'rotate(180deg)'
		}

	}


	return (
		<div className="feed-box-wrapper">
		<div className="feed-box">
				<div className="feed-visible">
					<div className="heading-wrapper">
						<h1 className="heading">Officer, your daughter has been kidnapped, yeah I killed her :)</h1>
						<h3 className="club-title">oops murdered</h3>
					</div>
					<div onClick={handleClick} className="know-more"><KnowMore /></div>

				</div>

				{isShow ? <Content content='nothing' /> : <></>}
			</div>
			<div className="feed-box">
				<div className="feed-visible">
					<div className="heading-wrapper">
						<h1 className="heading">Officer, your daughter has been kidnapped, yeah I killed her :)</h1>
						<h3 className="club-title">oops murdered</h3>
					</div>
					<div onClick={handleClick} className="know-more"><KnowMore /></div>

				</div>

				{isShow ? <Content content='nothing' /> : <></>}
			</div><div className="feed-box">
				<div className="feed-visible">
					<div className="heading-wrapper">
						<h1 className="heading">Officer, your daughter has been kidnapped, yeah I killed her :)</h1>
						<h3 className="club-title">oops murdered</h3>
					</div>
					<div onClick={handleClick} className="know-more"><KnowMore /></div>

				</div>

				{isShow ? <Content content='nothing' /> : <></>}
			</div>
		</div>
	)
}
