import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Latest from '../ExtraTwo/Latest';
import Products from '../ExtraTwo/Products';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Gallery></Gallery>
			<ShopByCategory></ShopByCategory>
			<Latest></Latest>
			<Products></Products>
		</div>
	);
};

export default Home;
