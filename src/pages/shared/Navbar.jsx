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
		<div className="flex justify-between items-center bg-black py-8 pr-10">
			<div className="flex">
				<img
					className="w-28 h-16"
					src="https://i.ibb.co/6RpYGsm/pngegg.png"
					alt=""
				/>
				<h1 className="text-2xl  font-semibold uppercase text-white">
					<span className="border-l-4">Sports</span> <br />{' '}
					<span className="border-r-4 text-green-500">Shop</span>
				</h1>
			</div>
			<div>
				<nav>
					<Link
						activeClassName="active-link"
						className="text-white text-xl hover:border-b-[3px] hover:border-green-500 mr-3 font-semibold uppercase"
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
			<div className="flex">
				{user ? (
					<button onClick={handleLogOut} className="btn mr-3">
						Log Out
					</button>
				) : (
					<button className="btn mr-3">
						<Link to="/login">Login</Link>
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
