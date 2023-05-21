import React, { useEffect, useState } from 'react';
import AllToys from '../AllToys/AllToys';

const Toys = () => {
	const [toys, setToys] = useState([]);
	const [limit, setLimit] = useState(0);

	const handleLimit = (event) => {
		event.preventDefault();
		const limit = event.target.limit.value;
		setLimit(limit);
	};

	useEffect(() => {
		fetch(
			`https://toy-marketplace-server-roan.vercel.app/toys?limit=${limit}`
		)
			.then((res) => res.json())
			.then((data) => {
				setToys(data);
			});
	}, [limit]);

	return (
		<div>
			<div className="form-control my-5">
				<form onSubmit={handleLimit} className="input-group">
					<input
						type="text"
						placeholder="set limit"
						name="limit"
						className="input input-bordered w-1/2"
					/>
					<input type="submit" value="Load Data" className="btn" />
				</form>
			</div>

			<div className="mb-20">
				<tbody className="flex justify-between py-7 px-5 bg-gray-200">
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
		</div>
	);
};

export default Toys;
