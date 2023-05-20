import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
	const [cricket, setCricket] = useState([]);
	const [football, setFootball] = useState([]);
	const [volleyball, setVolleyball] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/cricket')
			.then((res) => res.json())
			.then((data) => {
				setCricket(data);
			});
	});

	useEffect(() => {
		fetch('http://localhost:5000/football')
			.then((res) => res.json())
			.then((data) => {
				setFootball(data);
			});
	});

	useEffect(() => {
		fetch('http://localhost:5000/volleyball')
			.then((res) => res.json())
			.then((data) => {
				setVolleyball(data);
			});
	});

	// const { name, category, photo, quantity } = toy;
	return (
		<div className="my-10">
			<h1 className="text-5xl text-center">Shop By Category</h1>
			<Tabs>
				<TabList>
					<Tab>Football</Tab>
					<Tab>Cricket</Tab>
					<Tab>Volleyball</Tab>
				</TabList>

				<TabPanel>
					<div className="grid grid-cols-2">
						{football.map((footballToy) => (
							<div key={footballToy._id}>
								<h1>{footballToy.name}</h1>
								<p>{footballToy.category}</p>
								<img src={footballToy.photo} alt="" />
								<p>{footballToy.quantity}</p>
							</div>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid grid-cols-2">
						{cricket.map((cricketToy) => (
							<div key={cricketToy._id}>
								<h1>{cricketToy.name}</h1>
								<p>{cricketToy.category}</p>
								<img src={cricketToy.photo} alt="" />
								<p>{cricketToy.quantity}</p>
							</div>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid grid-cols-2">
						{volleyball.map((volleyToy) => (
							<div key={volleyToy._id}>
								<h1>{volleyToy.name}</h1>
								<p>{volleyToy.category}</p>
								<img src={volleyToy.photo} alt="" />
								<p>{volleyToy.quantity}</p>
							</div>
						))}
					</div>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default ShopByCategory;
