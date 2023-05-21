import React from 'react';
import Swal from 'sweetalert2';
import useTitle from '../../title/title';

const AddToys = () => {
	useTitle('Add Toy');
	const handleNewToy = (event) => {
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

		const newToy = {
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

		const toLower = category.toLowerCase();

		if (toLower === 'football') {
			fetch('https://toy-marketplace-server-roan.vercel.app/football', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(newToy),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.insertedId) {
						Swal.fire({
							title: 'Success!',
							text: 'Toy added in football successfully',
							icon: 'success',
							confirmButtonText: 'Okay',
						});
					}
				});
		}

		if (toLower === 'cricket') {
			fetch('https://toy-marketplace-server-roan.vercel.app/cricket', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(newToy),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.insertedId) {
						Swal.fire({
							title: 'Success!',
							text: 'Item added in cricket successfully',
							icon: 'success',
							confirmButtonText: 'Okay',
						});
					}
				});
		}

		if (toLower === 'volleyball') {
			fetch('https://toy-marketplace-server-roan.vercel.app/volleyball', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(newToy),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.insertedId) {
						Swal.fire({
							title: 'Success!',
							text: 'Item added in volleyball successfully',
							icon: 'success',
							confirmButtonText: 'Okay',
						});
					}
				});
		}

		fetch('https://toy-marketplace-server-roan.vercel.app/toys', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(newToy),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					Swal.fire({
						title: 'Success!',
						text: 'Item added in toys successfully',
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
								Add New Toy
							</h1>
							<p className="text-center text-[#374151] pb-5">
								It is a long established fact that a reader will
								be distracted by the readable content of a page
								when looking at its layout. The point of using
								Lorem Ipsum is that it has a more-or-less normal
								distribution of letters, as opposed to using
								Content here.
							</p>
							<form onSubmit={handleNewToy} className="p-10">
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
										placeholder="Enter toy details"
										className="w-full p-2"
									/>
								</div>
								<div className="form-control mt-6">
									<button className="p-2 text-[#331A15] bg-green-500">
										Add toy
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

export default AddToys;
