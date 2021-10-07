import React from 'react'
import { Arrow } from '../icons/Icons'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

export const HomeContent = () => {
	return (
		<div className="home-content">
			<div className="site-description">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, 
					est. Vel sit debitis deserunt,
					 dolores reiciendis officia animi quisquam ipsum <Link to='/fee/feed'><strong>pariatur</strong></Link> asperiores natus.
					  Consequatur ducimus suscipit reprehenderit. 
					 Fugiat odit labore illo, iusto mollitia tenetur aspernatur laudantium
					  excepturi modi quam quo fuga et consequatur eaque quaerat 
					 quisquam tempore ut, reprehenderit exercitationem?
				</p>
			</div>
			
			<div className="explore">Explore<Arrow /></div>
		</div>
	)
}
