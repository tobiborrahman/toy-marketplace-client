import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import './Navbar';

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<div className="md:flex justify-between items-center bg-black py-4 pr-10">
			<div className="flex">
				<img
					className="w-28 h-16"
					src="https://i.ibb.co/0Xmsd1v/toy-logooo.png"
					alt=""
				/>
			</div>
			<div>
				<nav>
					<Link
						activeClassName="active-link"
						className="text-white hover:text-2xl text-xl hover:border-b-[3px] hover:border-green-500 duration-300 mr-3 font-semibold uppercase"
						to="/"
					>
						Home
					</Link>
					<Link
						className="text-white text-xl hover:border-b-[3px] hover:border-green-500  mr-3 font-semibold uppercase"
						to="/toys"
					>
						All Toys
					</Link>
					{user ? (
						<Link
							className="text-white text-xl hover:border-b-[3px] hover:border-green-500  mr-3 font-semibold uppercase"
							to="/myToys"
						>
							MY Toys
						</Link>
					) : (
						''
					)}

					<Link
						className="text-white text-xl hover:border-b-[3px] hover:border-green-500  mr-3 font-semibold uppercase"
						to="/addToys"
					>
						Add a Toy
					</Link>

					<Link
						className="text-white text-xl hover:border-b-[3px] hover:border-green-500  mr-3 font-semibold uppercase"
						to="/blogs"
					>
						Blogs
					</Link>
				</nav>
			</div>
			<div className="md:flex">
				{user ? (
					<button
						onClick={handleLogOut}
						className="py-2 px-5 border-[0.1px] hover:border-green-600 duration-700 uppercase hover:bg-green-600 text-xl text-green-500 hover:text-white  font-semibold mr-3"
					>
						Log Out
					</button>
				) : (
					<button className="py-2 px-8 border-[0.1px] hover:border-green-600 duration-700 uppercase hover:bg-green-600 text-xl text-green-500 hover:text-white  font-semibold mr-3">
						<Link to="/login">Log In</Link>
					</button>
				)}
				<span
					className="tooltip tooltip-top"
					data-tip={user?.displayName}
				>
					{user && (
						<img
							className="w-10 rounded-[50%] pt-1 "
							src={user?.photoURL}
							alt=""
						/>
					)}
				</span>
			</div>
		</div>
	);
};

export default Navbar;
