import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../title/title';

const ShopByCategory = () => {
	useTitle('Shop by Category');
	const [cricket, setCricket] = useState([]);
	const [football, setFootball] = useState([]);
	const [volleyball, setVolleyball] = useState([]);

	const { user } = useContext(AuthContext);

	const notify = () => toast('You have to log in first to view details');

	useEffect(() => {
		fetch('https://toy-marketplace-server-roan.vercel.app/cricket')
			.then((res) => res.json())
			.then((data) => {
				setCricket(data);
			});
	}, []);

	useEffect(() => {
		fetch('https://toy-marketplace-server-roan.vercel.app/football')
			.then((res) => res.json())
			.then((data) => {
				setFootball(data);
			});
	}, []);

	useEffect(() => {
		fetch('https://toy-marketplace-server-roan.vercel.app/volleyball')
			.then((res) => res.json())
			.then((data) => {
				setVolleyball(data);
			});
	}, []);

	return (
		<div className="py-10 bg-pink-50 px-10">
			<h1 className="text-7xl text-center">Shop By Category</h1>
			<Tabs>
				<TabList className="text-center my-10">
					<Tab>Football</Tab>
					<Tab>Cricket</Tab>
					<Tab>Volleyball</Tab>
				</TabList>

				<TabPanel>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
						{football.map((footballToy) => (
							<div className="card w-96 bg-base-100 shadow-xl">
								<figure className="px-10 pt-10">
									<img
										src={footballToy.picture}
										alt="Shoes"
										className="rounded-xl"
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
										{footballToy.name}
									</h2>
									<p>Price: ${footballToy.price}</p>
									<p>Rating: {footballToy.rating}</p>
									<div className="card-actions">
										<Link
											to={`football/${footballToy._id}`}
										>
											<button
												onClick={notify}
												className="btn btn-success"
											>
												View Details
												<ToastContainer />
											</button>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
						{cricket.map((cricketToy) => (
							<div className="card w-96 bg-base-100 shadow-xl">
								<figure className="px-10 pt-10">
									<img
										src={cricketToy.picture}
										alt="Shoes"
										className="rounded-xl"
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
										{cricketToy.name}
									</h2>
									<p>Price: ${cricketToy.price}</p>
									<p>Rating: {cricketToy.rating}</p>
									<div className="card-actions">
										<Link to={`/cricket/${cricketToy._id}`}>
											<button className="btn btn-success">
												View Details
											</button>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
						{volleyball.map((volleyToy) => (
							<div className="card w-96 bg-base-100 shadow-xl">
								<figure className="px-10 pt-10">
									<img
										src={volleyToy.picture}
										alt="Shoes"
										className="rounded-xl"
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
										{volleyToy.name}
									</h2>
									<p>Price: ${volleyToy.price}</p>
									<p>Rating: {volleyToy.rating}</p>
									<div className="card-actions">
										<Link
											to={`volleyball/${volleyToy._id}`}
										>
											<button className="btn btn-success">
												View Details
											</button>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default ShopByCategory;
