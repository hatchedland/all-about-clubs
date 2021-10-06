import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { PageTitle } from '../pagetitle/PageTitle'
import { ClubUpdates } from '../clubupdates/ClubUpdates'
import './NewsFeed.css'

export const Feed = () => {
	return (
		<div className="news-feed-section">
			<Navbar />
			<PageTitle title="news feed" />
			<div className="news-feed-folder">
				<div className="archieve">
					<div className="robotics-newsletter block">
						<div className='card-info'>ROBOTICS NEWSLETTER</div>
					</div>
					<div className="magazine-archieve block">
					<div className='card-info'>MAGAZINE ARCHIEVE</div>
					</div>
				</div>
				<div className="news-folder">
				<ClubUpdates/>
				<ClubUpdates/>
				<ClubUpdates/>
				</div>
		
			</div>
		
		</div>
	)
}
