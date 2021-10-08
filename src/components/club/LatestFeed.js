import React from 'react'
import { ClubUpdates } from '../clubupdates/ClubUpdates'

import InstagramEmbed from 'react-instagram-embed';


export const LatestFeed = () => {

	return (
		<div >
			<h1>instagram posts</h1>
 
 <InstagramEmbed
	 url='https://www.instagram.com/p/CLC00HxhTdR/'
	 maxWidth={320}
	 hideCaption={false}
	 containerTagName='div'
	 protocol=''
	 injectScript
	 onLoading={() => {}}
	 onSuccess={() => {}}
	 onAfterRender={() => {}}
	 onFailure={() => {}}
 />
		</div>
	)
}
