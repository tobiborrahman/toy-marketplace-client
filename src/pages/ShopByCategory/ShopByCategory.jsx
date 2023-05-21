import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
	const [cricket, setCricket] = useState([]);
	const [football, setFootball] = useState([]);
	const [volleyball, setVolleyball] = useState([]);

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
		<div className="py-10 bg-pink-50">
			<h1 className="text-7xl text-center py-20">Shop By Category</h1>
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
									<p>{footballToy.price}</p>
									<p>{footballToy.rating}</p>
									<div className="card-actions">
										<button className="btn btn-primary">
											View Details
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid grid-cols-1 md:grid-cols-3">
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
									<p>{cricketToy.price}</p>
									<p>{cricketToy.rating}</p>
									<div className="card-actions">
										<Link
											to={`/toyDetails/${cricketToy._id}`}
										>
											<button className="btn btn-primary">
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
					<div className="grid grid-cols-1 md:grid-cols-3">
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
									<p>{volleyToy.price}</p>
									<p>{volleyToy.rating}</p>
									<div className="card-actions">
										<button className="btn btn-primary">
											View Details
										</button>
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
