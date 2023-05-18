import React from 'react';

const Banner = () => {
	return (
		<div className="carousel w-full">
			<div id="slide1" className="carousel-item relative w-full">
				<img
					src="https://i.ibb.co/rfcCRhw/football-1.jpg"
					className="w-full h-[600px]"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide3" className="text-2xl text-white">
						❮
					</a>
					<a href="#slide2" className="text-2xl text-white">
						❯
					</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full">
				<img
					src="https://i.ibb.co/ZL6BJX1/cricket.jpg"
					className="w-full h-[600px]"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide1" className="text-2xl text-white">
						❮
					</a>
					<a href="#slide3" className="text-2xl text-white">
						❯
					</a>
				</div>
			</div>
			<div id="slide3" className="carousel-item relative w-full">
				<img
					src="https://i.ibb.co/R7P6r5K/baseball.jpg"
					className="w-full h-[600px]"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide2" className="text-2xl text-white">
						❮
					</a>
					<a href="#slide1" className="text-2xl text-white">
						❯
					</a>
				</div>
			</div>
		</div>
	);
};

export default Banner;
