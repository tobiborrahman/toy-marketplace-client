import React from 'react';
import Swal from 'sweetalert2';

const AddToys = () => {
	const handleNewCoffee = (event) => {
		event.preventDefault();
		const form = event.target;

		const name = form.name.value;
		const quantity = form.quantity.value;
		const supplier = form.supplier.value;
		const category = form.category.value;
		const taste = form.taste.value;
		const details = form.details.value;
		const photo = form.photo.value;

		const newCoffee = {
			name,
			quantity,
			supplier,
			category,
			taste,
			details,
			photo,
		};
		// console.log(newCoffee);

		if (category === 'football') {
			fetch('http://localhost:5000/football', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(newCoffee),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.insertedId) {
						Swal.fire({
							title: 'Success!',
							text: 'Item added successfully',
							icon: 'success',
							confirmButtonText: 'Okay',
						});
					}
				});
		}

		if (category === 'cricket') {
			fetch('http://localhost:5000/cricket', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(newCoffee),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.insertedId) {
						Swal.fire({
							title: 'Success!',
							text: 'Item added successfully',
							icon: 'success',
							confirmButtonText: 'Okay',
						});
					}
				});
		}

		if (category === 'volleyball') {
			fetch('http://localhost:5000/volleyball', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(newCoffee),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.insertedId) {
						Swal.fire({
							title: 'Success!',
							text: 'Item added successfully',
							icon: 'success',
							confirmButtonText: 'Okay',
						});
					}
				});
		}

		fetch('http://localhost:5000/toys', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(newCoffee),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					Swal.fire({
						title: 'Success!',
						text: 'Item added successfully',
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
							<h1 className="text-4xl text-center drop-shadow-2xl text-sh text-[#374151] py-7">
								Add New Coffee
							</h1>
							<p className="text-center text-[#374151] pb-5">
								It is a long established fact that a reader will
								be distraceted by the readable content of a page
								when looking at its layout. The point of using
								Lorem Ipsum is that it has a more-or-less normal
								distribution of letters, as opposed to using
								Content here.
							</p>
							<form onSubmit={handleNewCoffee} className="p-10">
								<div className="md:flex">
									<div className="md:mr-10 md:w-2/4">
										<div className="">
											<label className="label">
												<span className="label-text">
													Name
												</span>
											</label>
											<input
												type="text"
												name="name"
												placeholder="Enter coffee name"
												className="w-full p-2"
											/>
										</div>
										<div className="">
											<label className="label">
												<span className="label-text">
													Supplier
												</span>
											</label>
											<input
												type="text"
												name="supplier"
												placeholder="Enter coffee supplier"
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
												placeholder="Enter coffee category"
												className="w-full p-2"
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
												placeholder="Enter coffee chef"
												className="w-full p-2"
											/>
										</div>
										<div className="">
											<label className="label">
												<span className="label-text">
													Taste
												</span>
											</label>
											<input
												type="text"
												name="taste"
												placeholder="Enter coffee taste"
												className="w-full p-2"
											/>
										</div>
										<div className="">
											<label className="label">
												<span className="label-text">
													Details
												</span>
											</label>
											<input
												type="text"
												name="details"
												placeholder="Enter coffee details"
												className="w-full p-2"
											/>
										</div>
									</div>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">
											Photo
										</span>
									</label>
									<input
										type="text"
										name="photo"
										placeholder="Enter phot URL"
										className="p-2"
									/>
								</div>
								<div className="form-control mt-6">
									<button className="p-2 text-[#331A15] bg-[#D2B48C]">
										Add Coffee
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
