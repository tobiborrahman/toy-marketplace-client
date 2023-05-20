import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateToy = () => {
	const updateToy = useLoaderData();
	console.log(updateToy);
	return <div></div>;
};

export default UpdateToy;
