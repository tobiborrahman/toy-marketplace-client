import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
	const updateToy = useLoaderData();
	console.log(updateToy);

	const {
		_id,
		name,
		quantity,
		sellerName,
		category,
		price,
		details,
		picture,
		rating,
		email,
	} = updateToy;

	const handleUpdateToy = (event) => {
		event.preventDefault();
		const form = event.target;

		const name = form.name.value;
		const quantity = form.quantity.value;
		const sellerName = form.sellerName.value;
		const category = form.category.value;
		const price = form.price.value;
		const details = form.details.value;
		const picture = form.picture.value;
		const rating = form.rating.value;
		const email = form.email.value;

		const updatedToy = {
			_id,
			name,
			quantity,
			sellerName,
			category,
			price,
			details,
			picture,
			rating,
			email,
		};

		fetch(`https://toy-marketplace-server-roan.vercel.app/toys/${_id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(updatedToy),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					Swal.fire({
						title: 'Success!',
						text: 'Toy updated successfully',
						icon: 'success',
						confirmButtonText: 'Okay',
					});
				}
			});
	};

	return (
		<div>
			<div>
				<div className="md:my-20">
					<div className="md:w-[60%] mx-auto flex-col lg:flex-row-reverse">
						<div className="flex-shrink-0 bg-[#F4F3F0]">
							<h1 className="text-5xl uppercase font-semibold text-center drop-shadow-2xl text-sh text-[#374151] py-7">
								Update Toy
							</h1>
							<p className="text-center text-[#374151] pb-5">
								You can update your toys information if needed
								anytime from anywhere
							</p>
							<form onSubmit={handleUpdateToy} className="p-10">
								<div className="md:flex">
									<div className="md:mr-10 md:w-2/4">
										<div className="">
											<label className="label">
												<span className="label-text">
													Toy Name
												</span>
											</label>
											<input
												type="text"
												name="name"
												defaultValue={name}
												placeholder="Enter toy name"
												className="w-full p-2"
											/>
										</div>

										<div className="">
											<label className="label">
												<span className="label-text">
													Category
												</span>
											</label>
											<input
												type="text"
												name="category"
												defaultValue={category}
												placeholder="Enter category Ex. 'cricket', 'football'"
												className="w-full p-2"
											/>
										</div>
										<div className="">
											<label className="label">
												<span className="label-text">
													Ratings
												</span>
											</label>
											<input
												type="text"
												name="rating"
												defaultValue={rating}
												placeholder="Enter ratings"
												className="w-full p-2"
											/>
										</div>
										<div className="form-control">
											<label className="label">
												<span className="label-text">
													Picture
												</span>
											</label>
											<input
												type="text"
												name="picture"
												defaultValue={picture}
												placeholder="Enter photo URL"
												className="p-2"
											/>
										</div>
									</div>
									<div className="md:w-2/4">
										<div className="">
											<label className="label">
												<span className="label-text">
													Quantity
												</span>
											</label>
											<input
												type="text"
												name="quantity"
												defaultValue={quantity}
												placeholder="Enter toy quantity"
												className="w-full p-2"
											/>
										</div>
										<div className="">
											<label className="label">
												<span className="label-text">
													Seller Name
												</span>
											</label>
											<input
												type="text"
												name="sellerName"
												defaultValue={sellerName}
												placeholder="Enter seller name"
												className="w-full p-2"
											/>
										</div>
										<div className="">
											<label className="label">
												<span className="label-text">
													Price
												</span>
											</label>
											<input
												type="text"
												name="price"
												defaultValue={price}
												placeholder="Enter toy price"
												className="w-full p-2"
											/>
										</div>
										<div className="">
											<label className="label">
												<span className="label-text">
													Email
												</span>
											</label>
											<input
												type="email"
												name="email"
												defaultValue={email}
												placeholder="Enter seller email"
												className="w-full p-2"
											/>
										</div>
									</div>
								</div>

								<div className="">
									<label className="label">
										<span className="label-text">
											Toy Details
										</span>
									</label>
									<input
										type="text"
										name="details"
										defaultValue={details}
										placeholder="Enter toy details"
										className="w-full p-2"
									/>
								</div>
								<div className="form-control mt-6">
									<button className="p-2 text-[#331A15] bg-green-500">
										Update toy
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateToy;
