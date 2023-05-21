import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate('/');
	};
	return (
		<div className="relative">
			<img
				src="https://repository-images.githubusercontent.com/317553358/1bff1d80-33ea-11eb-92c9-261d90080973"
				alt=""
			/>
			<button
				onClick={handleNavigate}
				className="absolute top-[64%] z-10 text-white font-bold left-[43%] bg-green-500 hover:bg-green-800 duration-300 py-3 px-7"
			>
				Go to Homepage
			</button>
		</div>
	);
};

export default ErrorPage;
