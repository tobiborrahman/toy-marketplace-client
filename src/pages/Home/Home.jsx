import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Gallery></Gallery>
			<ShopByCategory></ShopByCategory>
		</div>
	);
};

export default Home;
