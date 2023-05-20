import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
	const singleToy = useLoaderData();
	console.log(singleToy);

	const { _id, name, photo, category, quantity } = singleToy;
	return (
		<div>
			<h1>{name}</h1>
			<p>{category}</p>
			<p>{quantity}</p>
		</div>
	);
};

export default SingleToy;
