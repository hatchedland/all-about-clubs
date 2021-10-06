import { buildQueries } from '@testing-library/dom'
import React from 'react'
import './PageTitle.css'




export const PageTitle = (props) => {
	return (
		<div className="page-title">
			{props.title}
		</div>
	)
}
