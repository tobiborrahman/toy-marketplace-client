import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
	const singleToy = useLoaderData();
	console.log(singleToy);
	return <div></div>;
};

export default SingleToy;
