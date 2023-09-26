import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// https://i.ibb.co/6RpYGsm/pngegg.png
// https://i.ibb.co/rvDdkG4/Pngtree-modern-soccer-player-goal-keeper-3569616.jpg

const Footer = () => {
	return (
		<footer className="bg-black text-gray-200 py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-between items-center">
					<div className="flex items-center">
						<img
							src="https://i.ibb.co/0Xmsd1v/toy-logooo.png"
							alt="Logo"
							className="h-20 w-30 mr-2"
						/>
						<span className="font-semibold text-3xl">
							Sports Network
						</span>
					</div>
					<div className="mt-4 md:mt-0">
						<p>Satkhira, Khulna, Bangladesh</p>
					</div>
				</div>
				<hr className="my-6 border-gray-700" />
				<div className="flex flex-col md:flex-row justify-between">
					<div className="text-sm">
						&copy; {new Date().getFullYear()} Sports Shop. All
						rights reserved.
					</div>
					<div className="mt-4 md:mt-0">
						<ul className="flex space-x-4">
							<li>
								<a href="#" className="hover:text-gray-400">
									<FaFacebook />
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-gray-400">
									<FaTwitter />
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-gray-400">
									<FaInstagram></FaInstagram>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
