import React from 'react';

const AllToys = ({ toy }) => {
	const { name, photo, category, quantity } = toy;

	return (
		<div>
			{
				<div className="overflow-x-auto w-full">
					<table className="table w-full">
						{/* head */}
						<thead>
							<tr>
								<th>
									<label>
										<input
											type="checkbox"
											className="checkbox"
										/>
									</label>
								</th>
								<th>Name</th>
								<th>Job</th>
								<th>Favorite Color</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							<tr>
								<td>
									<img src={photo} alt="" />
								</td>
								<td>{name}</td>
								<td>{category}</td>
								<td>{quantity}</td>
							</tr>
						</tbody>
						{/* foot */}
					</table>
				</div>
			}
		</div>
	);
};

export default AllToys;
