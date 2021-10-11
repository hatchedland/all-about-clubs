import React from 'react'
import { SmoothProvider } from 'react-smooth-scrolling'
import { Navbar } from '../navbar/Navbar'
import './Home.css'
import { AboutUs } from '../aboutus/AboutUs';
import { Feed } from '../feedsection/NewsFeed'
import { HomeContent } from './HomeContent'
import { Heart } from '../icons/Icons';



export const Home = () => {
	return (
		<div className="home">
			<HomeContent />
			<Feed />
			<AboutUs />
			<div className="home-footer">Made with <Heart /> by 	<div className="name"><a href="https://google.com" target="_blank">rajan</a></div>&<div className="name"><a href="https://google.com" target="_blank">aniket</a></div>
			</div>
		</div>
	)
}
