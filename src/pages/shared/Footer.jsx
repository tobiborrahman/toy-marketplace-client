import React from 'react';

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-gray-300">
			<div className="container mx-auto py-8 px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="flex items-center mb-4 md:mb-0">
						<img
							src="/logo.png"
							alt="Website Logo"
							className="h-8 mr-2"
						/>
						<span className="text-lg font-bold">Your Website</span>
					</div>
					<div className="flex items-center mb-4 md:mb-0">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="mr-4"
						>
							<svg
								className="h-6 w-6 fill-current"
								viewBox="0 0 24 24"
							>
								{/* Facebook icon SVG path */}
							</svg>
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="mr-4"
						>
							<svg
								className="h-6 w-6 fill-current"
								viewBox="0 0 24 24"
							>
								{/* Twitter icon SVG path */}
							</svg>
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="mr-4"
						>
							<svg
								className="h-6 w-6 fill-current"
								viewBox="0 0 24 24"
							>
								{/* Instagram icon SVG path */}
							</svg>
						</a>
					</div>
					<div className="flex flex-col md:flex-row">
						<ul className="flex flex-wrap text-sm mb-4 md:mb-0">
							<li className="mr-6 mb-4 md:mb-0">
								<a href="/">Home</a>
							</li>
							<li className="mr-6 mb-4 md:mb-0">
								<a href="/about">About</a>
							</li>
							<li className="mr-6 mb-4 md:mb-0">
								<a href="/products">Products</a>
							</li>
							<li className="mr-6 mb-4 md:mb-0">
								<a href="/contact">Contact</a>
							</li>
						</ul>
						<div className="text-sm">
							<p className="mb-2">Contact Information:</p>
							<p>Email: contact@yourwebsite.com</p>
							<p>Phone: 123-456-7890</p>
						</div>
						<p className="text-sm">
							1234 Street Name, City, State, Postal Code
						</p>
					</div>
				</div>
				<div className="mt-8">
					<p className="text-sm">
						&copy; {new Date().getFullYear()} Your Website. All
						rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
