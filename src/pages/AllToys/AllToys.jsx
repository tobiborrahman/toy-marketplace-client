import React, { useLayoutEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = ({ toy }) => {
	// const singleToy = useLoaderData();
	const { _id, name, category, quantity } = toy;

	return (
		<>
			<div className="overflow-x-auto ">
				<table className="table  w-full">
					{/* head */}

					<tbody className="border-b">
						{/* row 1 */}
						<tr>
							<td>seller</td>
							<td>{name}</td>

							<td>{category}</td>
							<td>price</td>
							<td>{quantity}</td>
							<td>
								<Link to={`/singleToy/${_id}`}>
									<button className="btn">
										View Details
									</button>
								</Link>
							</td>
						</tr>
					</tbody>
					{/* foot */}
				</table>
			</div>
		</>
	);
};

export default AllToys;
