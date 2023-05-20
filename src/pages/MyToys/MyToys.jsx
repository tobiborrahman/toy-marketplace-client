import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { key } from 'localforage';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToys = () => {
	const { user } = useContext(AuthContext);
	const [userToys, setUserToys] = useState([]);

	const url = `http://localhost:5000/toys?email=${user?.email}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setUserToys(data);
			});
	}, []);

	const handleDelete = (_id) => {
		console.log(_id);
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/toys/${_id}`, {
					method: 'DELETE',
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount > 0) {
							Swal.fire(
								'Deleted!',
								'Your Toy has been deleted.',
								'success'
							);
							const remaining = userToys.filter(
								(toy) => toy._id !== _id
							);
							setUserToys(remaining);
						}
					});
			}
		});
	};

	return (
		<div>
			<div>
				<nav className="flex justify-between">
					<th>Name</th>
					<th>Job</th>
					<th>Favorite Color</th>
					<th></th>
				</nav>
			</div>
			{userToys.map((toys) => (
				<>
					<div className="overflow-x-auto w-full">
						<table className="table w-full">
							{/* head */}

							<tbody>
								{/* row 1 */}
								<tr>
									<th>{toys.details}</th>

									<td>{toys.quantity}</td>
									<th>
										<Link to={`/updateToy/${toys._id}`}>
											<button className="btn btn-ghost btn-xs">
												Update
											</button>
										</Link>
									</th>
									<th>
										<button
											onClick={() =>
												handleDelete(toys._id)
											}
											className="btn btn-ghost btn-xs"
										>
											Delete
										</button>
									</th>
								</tr>
							</tbody>
						</table>
					</div>
				</>
			))}
		</div>
	);
};

export default MyToys;
