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
			<tbody className="flex justify-between py-7 bg-gray-200">
				<th>Seller</th>
				<th>Toy Name</th>
				<th>Sub Category</th>
				<th>Price</th>
				<th>Available Quantity</th>
				<th>View Details</th>
			</tbody>

			{toys.map((toy) => (
				<AllToys key={toy._id} toy={toy}></AllToys>
			))}
		</div>
	);
};

export default Toys;
