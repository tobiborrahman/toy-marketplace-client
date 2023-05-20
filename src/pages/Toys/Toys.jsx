import React, { useEffect, useState } from 'react';
import AllToys from '../AllToys/AllToys';

const Toys = () => {
	const [toys, setToys] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/toys')
			.then((res) => res.json())
			.then((data) => {
				setToys(data);
			});
	}, []);

	return (
		<div>
			{toys.map((toy) => (
				<AllToys key={toy._id} toy={toy}></AllToys>
			))}
		</div>
	);
};

export default Toys;
