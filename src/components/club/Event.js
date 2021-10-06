import React from 'react'
import { Arrow } from '../icons/Icons'

export const Event = () => {
	return (
		<div className="event-folder">
			<div className="event">
				<div className="event-date"> DD/MM/YYYY</div>
				<div className="event-info">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis deleniti id assumenda sequi odio
						dignissimos veritatis explicabo cum, exercitationem molestiae.
					</p>
					<div className="read-more">Read More <Arrow /> </div>
				</div>
			</div>
		</div>
	)
}
