import React, { useLayoutEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../title/title';

const AllToys = ({ toy }) => {
	useTitle('All Toys')
	const { _id, name, category, quantity, sellerName, price } = toy;

	return (
		<>
			<table className="table  w-full">
				<tbody className="border-b">
					<tr className="flex justify-between">
						<td>{sellerName}</td>
						<td>{name}</td>

						<td>{category}</td>
						<td>{price}</td>
						<td>{quantity}</td>
						<td>
							<Link to={`/singleToy/${_id}`}>
								<button className="btn">View Details</button>
							</Link>
						</td>
					</tr>
				</tbody>
				{/* foot */}
			</table>
		</>
	);
};

export default AllToys;
