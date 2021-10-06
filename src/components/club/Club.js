import React from 'react'
import { PageTitle } from '../pagetitle/PageTitle'
import { Navbar } from '../navbar/Navbar'

export const Club = () => {


	function Content () { 
		return (
			<PageTitle />
		) 
	}



	return (
		<div>
			<Navbar />
			<div>{Content}</div>
			
		</div>
	)
}
