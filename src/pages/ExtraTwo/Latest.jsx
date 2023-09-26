import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Latest = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
			// className="bg-pink-50"
			data-aos="fade-left"
			// data-aos-offset="200"
			// data-aos-easing="ease-in-sine"
			// data-aos-duration="2000"
			// data-aos-delay="1500"
		>
			<h1 className="text-7xl text-center py-10">Latest Collection</h1>
			<div className="md:flex justify-between">
				<div className="w-1/3 border-2 text-center">
					<img
						src="https://m.media-amazon.com/images/I/61-1m5acONL._SL1500_.jpg"
						alt=""
					/>
				</div>
				<div className=" border-2 text-center">
					<img
						className="w-[400px] "
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXz6vIs-bIIBMY_yG3IvwnDMR5silaw32Z7A&usqp=CAU"
						alt=""
					/>
				</div>
				<div className=" border-2 text-center">
					<img
						className="w-[400px] "
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVyIIf7XPv09DQTw5xRIbHURiUBFqJNKtfcA&usqp=CAU"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Latest;
