import React from 'react';

const Gallery = () => {
	//
	//
	//
	//
	//
	//
	//
	//
	return (
		<div>
			<h1 className="text-7xl text-center my-20">Gallery</h1>
			<div className="flex">
				<div className="w-[300px]">
					<img
						className="w-full"
						src="https://i.ibb.co/fNDP1rT/img-8.jpg"
						alt=""
					/>
				</div>
				<div className="w-[700px]">
					<div className="flex">
						<img
							className="w-[230px] h-[220px]"
							src="https://i.ibb.co/48vXd33/img-4.jpg"
							alt=""
						/>
						<img
							className="w-[230px]"
							src="https://i.ibb.co/sv4GpX7/img-5.jpg"
							alt=""
						/>
						<img
							className="w-[230px]"
							src="https://i.ibb.co/sy7Bvt1/img-6.jpg"
							alt=""
						/>
					</div>
					<div className="flex">
						<img
							className="w-[230px] h-[217px]"
							src="https://i.ibb.co/wRT0WSL/img-1.jpg"
							alt=""
						/>
						<img
							className="w-[230px]"
							src="https://i.ibb.co/sv4GpX7/img-5.jpg"
							alt=""
						/>
						<img
							className="w-[230px]"
							src="https://i.ibb.co/n7b25sz/img-2.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="w-[300px]">
					<img src="https://i.ibb.co/5sgpPYL/img-7.jpg" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Gallery;
