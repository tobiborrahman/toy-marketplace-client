import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const Register = () => {
	const [error, setError] = useState();
	const { createUser } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data.email);
		createUser(data.email, data.password)
			.then((result) => {
				console.log(result.user);
			})
			.catch((err) => {
				setError(err.message);
			});
	};
	return (
		<>
			<div className="flex justify-center my-20 ">
				<div className="text-center w-[500px] border p-10 bg-gray-200">
					<h1 className="text-7xl text-black mb-10">Register!</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							className="border p-2 w-full"
							placeholder="Please enter your name"
							type="name"
							{...register('displayName', { required: true })}
						/>{' '}
						<br /> <br />
						<input
							className="border p-2 w-full"
							placeholder="Please enter your email"
							type="email"
							{...register('email', { required: true })}
						/>{' '}
						<br /> <br />
						<input
							className="border p-2 w-full"
							placeholder="Please enter your password"
							type="password"
							{...register('password', { required: true })}
						/>{' '}
						<br />
						<br />
						<input
							className="border p-2 w-full"
							placeholder="Please enter a Photo URL"
							type="photoURL"
							{...register('photoURL', { required: true })}
						/>
						<p className="text-red-500">{error}</p>
						{/* {errors.exampleRequired && <span>This field is required</span>} */}
						<p className="py-4">
							Already Have an Account?{' '}
							<Link className="text-red-500 " to="/login">
								Login
							</Link>
						</p>
						<input
							className="border py-2 bg-green-500 w-full"
							type="submit"
							value="Register"
						/>
					</form>
				</div>
			</div>
		</>
	);
};

export default Register;
