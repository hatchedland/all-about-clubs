import React from 'react'
import { Navbar } from '../navbar/Navbar'
import './Home.css'
import { Arrow } from '../icons/Icons'



export const Home = () => {
	return (
		<div className="home">
			<Navbar />
			<div className="home-content">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, 
					est. Vel sit debitis deserunt,
					 dolores reiciendis officia animi quisquam ipsum pariatur asperiores natus.
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
