
import React, {useState } from 'react'
import { ReadMore, Arrow } from '../icons/Icons';


export const PinnedFeed = () => {


	return (
		<ul>
				<div className="pinned-feed-header"><ReadMore />Important</div>


		

				<div className="feed-element">
					<div className="feed-element-header">
						<ReadMore />
						<ReadMore />
						<ReadMore />
					</div>

					<div className="feed-content-wrapper">
						<div className="feed-content">
							<div className="club-name">lorem</div>
							<div className="title">Lorem ipsum dolor sit amet.</div>
						</div>
						<div className="expand"><Arrow /></div>
					</div>
					<div className="feed-description">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. At corporis ex dolores pariatur asperiores veniam animi delectus quas nobis maxime!
						<div className="read-more">Read More<ReadMore /></div>
					</div>
				</div>










		</ul>


	)
}
