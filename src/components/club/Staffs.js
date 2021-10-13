import React from 'react'



function getStaffPhotos() {

	const url = fetch('https://api.unsplash.com/photos/random')


}

export const Staffs = () => {
	return (
		<div className="staffs">
			<div className='staff-folder'>
				<div className="labels">
					Faculty InCharge
				</div>
				<div className="staff-photos">
					<div className="pfp">
						<img src='https://www.animaatjes.nl/thumbs/cliparts/cartoons/southpark/clipart_southpark_animaatjes-23.jpg' alt="something" style={{ height: '100%', width: '100%' }} />
						<div className="fig-caption">
							<div className="name">Rajan Yadav</div>
							<div className="description">Staff Member </div>
						</div>
					</div>
					<div className="pfp">
						<img src='https://www.animaatjes.nl/thumbs/cliparts/cartoons/southpark/clipart_southpark_animaatjes-23.jpg' alt="something" style={{ height: '100%', width: '100%' }} />
						<figcaption>
							<div className="name">Rajan Yadav</div>
							<div className="description">Staff Member </div>
						</figcaption>
					</div>
					<div className="pfp">
						<img src='https://www.animaatjes.nl/thumbs/cliparts/cartoons/southpark/clipart_southpark_animaatjes-23.jpg' alt="something" style={{ height: '100%', width: '100%' }} />
						<figcaption>
							<div className="name">Rajan Yadav</div>
							<div className="description">Staff Member </div>
						</figcaption>
					</div>
				</div>
			</div>
		</div>

	)
}
