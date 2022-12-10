import React, { useState } from 'react';
import Drawer from '../Drawer';

const FavoriteWorkouts = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<section className="min-w-screen flex xs:flex-col sm:flex-row items-center justify-center px-5 py-5">
			<div className="flex justify-between p-4">
				<div className="p-5 xl:px-8 md:py-5">
					<button
						type="button"
						className="inline-block w-full px-7 py-3 rounded text-white bg-blue-600 hover:bg-emerald-600 hover:text-gray-900 focus:outline-none transition duration-150 ease-in-out mb-3 cursor-pointer"
						onClick={() => setIsOpen(true)}
					>
						Favorites
					</button>
					<p></p>
				</div>
			</div>
			<Drawer isOpen={isOpen} setIsOpen={setIsOpen}></Drawer>
		</section>
	);
};

export default FavoriteWorkouts;
