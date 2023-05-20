import React from 'react';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;
