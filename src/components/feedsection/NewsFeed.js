import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { PageTitle } from '../pagetitle/PageTitle'
import { ClubUpdates } from '../clubupdates/ClubUpdates'
import { Arrow, ReadMore } from '../icons/Icons'
import './NewsFeed.css'
import { PinnedFeed } from './PinnedFeed'

export const Feed = () => {
	return (
		<div className="news-feed-section">
			<div className="news-feed-folder">
				<div className="pinned-feed">
					<PinnedFeed />
				</div>

				<div className="news-folder">
					<ClubUpdates />
				</div>


			</div>

		</div>
	)
}
