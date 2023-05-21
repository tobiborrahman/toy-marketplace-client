import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
	const [error, setError] = useState();

	const { signIn, googleSignIn } = useContext(AuthContext);

	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || '/';

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		signIn(data.email, data.password)
			.then((result) => {
				console.log(result.user);
				navigate(from, { replace: true });
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				console.log(result.user);
				navigate(from, { replace: true });
			})
			.catch((err) => {
				setError(err.message);
			});
	};
	return (
		<>
			<div className="flex justify-center my-20">
				<div className="text-center w-[500px] border p-10 bg-gray-200">
					<h1 className="text-7xl text-black mb-10">Login Now!</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							className="border p-2 w-full"
							placeholder="Please enter email"
							type="email"
							{...register('email', { required: true })}
						/>{' '}
						<br />
						<br />
						<input
							className="border p-2 w-full"
							placeholder="Please enter password"
							type="password"
							{...register('password', { required: true })}
						/>
						<p className="text-red-500">{error}</p>
						{/* {errors.exampleRequired && <span>This field is required</span>} */}
						<p className="my-4">
							Don't Have an Account?{' '}
							<Link className="text-red-700" to="/register">
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
