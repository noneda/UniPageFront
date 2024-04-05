import React, { useState, useEffect } from 'react';

const SlideBar = () => {
	const [isSecondNavVisible, setIsSecondNavVisible] = useState(false);
	const [isMainNavAnimated, setIsMainNavAnimated] = useState(false);
   
	useEffect(() => {
	   if (window.location.pathname.match(/fullcpgrid/i)) {
		 setIsSecondNavVisible(true);
		 setIsMainNavAnimated(true);
	   }
	}, []); 
   
	return (
		<div className="navwrapper">
		<div className={`nav mainnav ${isMainNavAnimated ? 'demoanim' : ''}`}>
			<div className="navbutton selected">
				<div className="navicon">
					<ion-icon name="home-outline"></ion-icon>
				</div>
				<div className="navlabel">
					Home
				</div>
			</div>
			<div className="navbutton demoanimhover">
				<div className="navicon">
					<ion-icon name="search-outline"></ion-icon>
				</div>
				<div className="navlabel">
					Search
				</div>
			</div>
			<div className="navbutton">
				<div className="navicon">
					<ion-icon name="person-outline"></ion-icon>
				</div>
				<div className="navlabel">
					Profile
				</div>
			</div>
		</div>
	</div>
	
	);
	};


export default SlideBar