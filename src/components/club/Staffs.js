import React from 'react'



function getStaffPhotos(){
	
const url=	fetch('https://api.unsplash.com/photos/random')


}
function images(){

}

export const Staffs = () => {
	return (
		<div className="staffs">
			<div className='staff-folder'>
				<div className="labels">
					Faculty InCharge
				</div>
				<div className="staff-photos">
					<div className="pfp">image[i]
						<img src={images} alt="something" />
					</div>
					<div className="pfp">image[2]</div>
					<div className="pfp">image[2]</div>
				</div>
			</div>
		</div>

	)
}
