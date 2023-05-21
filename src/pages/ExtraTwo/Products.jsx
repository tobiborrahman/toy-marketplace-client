import React from 'react';

const Products = () => {
	return (
		<div>
			<div className="m-44 rounded-3xl w-[900px] h-[600px] border-2 border-pink-300 flex justify-center items-center bg-pink-50">
				<div>
					<h1 className="text-7xl text-center font-bold mb-5">
						Newsletter
					</h1>
					<input
						type="email"
						className="py-7 border w-[400px] ps-5 mr-3 rounded-3xl"
						placeholder="Enter your email "
					/>
					<button className="py-7 px-10 rounded-3xl hover:bg-white duration-500 hover:border bg-purple-700">
						Subscribe
					</button>
					<p className="text-center py-2 font-semibold text-purple-300">
						*Only for first time user{' '}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Products;
