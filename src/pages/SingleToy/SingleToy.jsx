import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../title/title';

const SingleToy = () => {
	useTitle('Single Toy Details');
	const singleToy = useLoaderData();

	const { name, picture, category, sellerName, price, details, quantity } =
		singleToy;
	return (
		<div className="py-20 flex justify-center items-center">
			<div className=" h-[85vh] border-2 border-pink-200 p-10">
				<div>
					<img className="w-[1000px] h-[60vh]" src={picture} alt="" />
				</div>
				<div className="flex justify-evenly items-center my-8">
					<h3 className="font-semibold">Toy Name: {name}</h3>
					<p className="font-semibold">Seller Name: {sellerName}</p>
					<p className="font-semibold">Quantity: {quantity}</p>
					<p className="font-semibold">Price: ${price}</p>
					<p className="font-semibold">Category: {category}</p>
					<p className="font-semibold">Details: {details}</p>
				</div>
			</div>
		</div>
	);
};

export default SingleToy;
