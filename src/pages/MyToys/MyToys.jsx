import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../title/title';

const MyToys = () => {
	useTitle('My Toys');
	const { user } = useContext(AuthContext);
	const [userToys, setUserToys] = useState([]);

	const url = `https://toy-marketplace-server-roan.vercel.app/toys?email=${user?.email}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setUserToys(data);
			});
	}, []);

	const handleDelete = (_id) => {
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
				fetch(
					`https://toy-marketplace-server-roan.vercel.app/toys/${_id}`,
					{
						method: 'DELETE',
					}
				)
					.then((res) => res.json())
					.then((data) => {
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
				<nav className="flex justify-between  py-4 bg-gray-200">
					<th>Toy Name</th>
					<th>Seller Name</th>
					<th>Price</th>
					<th>Category</th>
					<th>Quantity</th>
					<th>Update Button</th>
					<th>Delete Button</th>
				</nav>
			</div>
			{userToys.map((toys) => (
				<>
					<div className="w-full">
						<div className="table w-full border-b">
							{/* head */}

							<div>
								{/* row 1 */}
								<nav className="flex justify-between">
									<th>{toys.name}</th>
									<th>{toys.sellerName}</th>
									<th>${toys.price}</th>
									<th>{toys.category}</th>
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
								</nav>
							</div>
						</div>
					</div>
				</>
			))}
		</div>
	);
};

export default MyToys;
