import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
	const singleToy = useLoaderData();
	console.log(singleToy);

	const {
		_id,
		name,
		picture,
		category,
		sellerName,
		email,
		price,
		rating,
		details,
		quantity,
	} = singleToy;
	return (
		<div>
			<div>
				<div>
					<img className="h-[500px] w-full" src={picture} alt="" />
				</div>
				<div className="text-center">
					<h3 className="font-bold text-lg">{name}</h3>
					<h3 className="font-bold text-lg">{category}</h3>
					<h3 className="font-bold text-lg">{sellerName}</h3>
					<h3 className="font-bold text-lg">{quantity}</h3>
					<h3 className="font-bold text-lg">{price}</h3>
					<h3 className="font-bold text-lg">{email}</h3>
					<h3 className="font-bold text-lg">{rating}</h3>
					<h3 className="font-bold text-lg">{details}</h3>
				</div>
			</div>
		</div>
	);
};

export default SingleToy;
