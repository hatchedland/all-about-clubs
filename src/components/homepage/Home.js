import React from 'react'
import { SmoothProvider } from 'react-smooth-scrolling'
import { Navbar } from '../navbar/Navbar'
import './Home.css'
import { AboutUs } from '../aboutus/AboutUs';
import { Feed } from '../feedsection/NewsFeed'
import { HomeContent } from './HomeContent'



export const Home = () => {
	return (
		<div className="home">
		
			
			
		<Navbar />
     
       <HomeContent />
      
        <Feed />
				<AboutUs />
		</div>
	)
}
