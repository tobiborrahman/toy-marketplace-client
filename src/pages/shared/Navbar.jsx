import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

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
		<div className="flex justify-between items-center bg-black py-8 px-14">
			<div>
				<h1 className="text-2xl font-semibold uppercase text-white">
					Sports <br /> <span className="border-r">Shop</span>
				</h1>
			</div>
			<div>
				<nav>
					<Link
						className="text-white text-xl hover:border-b-[3px] hover:border-green-500 mr-3 font-semibold uppercase"
						to="/"
					>
						Home
					</Link>
					<Link
						className="text-white text-xl hover:border-b-[3px] hover:border-green-500  mr-3 font-semibold uppercase"
						to="/allToys"
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
					{user ? (
						<Link
							className="text-white text-xl hover:border-b-[3px] hover:border-green-500  mr-3 font-semibold uppercase"
							to="/addAToys"
						>
							Add a Toy
						</Link>
					) : (
						''
					)}
					<Link
						className="text-white text-xl hover:border-b-[3px] hover:border-green-500  mr-3 font-semibold uppercase"
						to="/blogs"
					>
						Blogs
					</Link>
				</nav>
			</div>
			<div className="flex">
				<span
					className="tooltip tooltip-top"
					data-tip={user?.displayName}
				>
					{user && (
						<img
							className="w-10 rounded-[50%] pt-1 mr-3"
							src={user?.photoURL}
							alt=""
						/>
					)}
				</span>
				{user ? (
					<button onClick={handleLogOut} className="btn">
						Log Out
					</button>
				) : (
					<button className="btn">
						<Link to="/login">Login</Link>
					</button>
				)}
			</div>
		</div>
	);
};

export default Navbar;
