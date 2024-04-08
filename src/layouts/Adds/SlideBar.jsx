import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SlideBar = () => {
	const [isMainNavAnimated, setIsMainNavAnimated] = useState(false);
   
	useEffect(() => {
	   if (window.location.pathname.match(/fullcpgrid/i)) {
		 setIsSecondNavVisible(true);
		 setIsMainNavAnimated(true);
	   }
	}, []); 

	const Select = (getData) => {
		const location = useLocation();
		if(location.pathname === getData){
			return " navbutton selected"
		}else{
			return "navbutton"
		}
	}
   
	return (
		<div className="navwrapper">
		<div className={`nav mainnav ${isMainNavAnimated ? 'demoanim' : ''}`}>
			<div className={`${Select("/home")} `}>
				<div className="navicon">
					<ion-icon name="home-outline"></ion-icon>
				</div>
				<div className="navlabel ">
					<a href='/home'>Home</a>
				</div>
			</div>
			<div className={`${Select("/home/perfil")} `}>
				<div className="navicon">
					<ion-icon name="person-outline"></ion-icon>
				</div>
				<div className="navlabel">
					<a href='/home/perfil'>Perfil</a>
				</div>
			</div>
			<div className={`${Select("/")} `}>
				<div className="navicon">
					<ion-icon name="search-outline"></ion-icon>
				</div>
				<div className="navlabel">
					<a href='/'>Log Out</a>
				</div>
			</div>
		</div>
	</div>
	
	);
	};


export default SlideBar