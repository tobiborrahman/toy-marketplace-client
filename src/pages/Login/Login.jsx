import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import Navbar from '../shared/Navbar';

const Login = () => {
	const { signIn, googleSignIn } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		signIn(data.email, data.password)
			.then((result) => {
				console.log(result.user);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				console.log(result.user);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<>
			<Navbar></Navbar>
			<div className="flex justify-center mt-20">
				<div className="text-center w-[500px] border p-10 bg-gray-200">
					<h1 className="text-7xl text-black mb-10">Login Now!</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							className="border p-2 w-full"
							type="email"
							{...register('email', { required: true })}
						/>{' '}
						<br />
						<br />
						<input
							className="border p-2 w-full"
							type="password"
							{...register('password', { required: true })}
						/>
						{/* {errors.exampleRequired && <span>This field is required</span>} */}
						<p className="my-4">
							Don't Have an Account?{' '}
							<Link className="text-red-500" to="/register">
								Register
							</Link>
						</p>
						<input
							className="border py-2 bg-green-500 w-full"
							type="submit"
							value="Login"
						/>
						<button
							onClick={handleGoogleSignIn}
							className="flex justify-center  items-center border py-2 bg-green-500 w-full mt-3"
						>
							Sign In With{' '}
							<FaGoogle className="font-bold text-red-600" />
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
