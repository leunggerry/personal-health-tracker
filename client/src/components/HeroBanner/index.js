import React from 'react';
import placeHolderImage from '../../assets/images/kelly-sikkema-bE6k8SQT2FQ-unsplash.jpg';
import Fonts from '../../assets/Fonts';

function HeroBanner() {
	return (
		<section className="container mx-auto py-4">
			<div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
				{/* CTA */}
				<div className="basis-1/3 flex-1">
					<h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
						Make your{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
							health a priority
						</span>{' '}
					</h1>
					<br />
					<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
						Add Capstone Fitness to your workout routine and see the results for
						yourself! This daily workout tracker will help you maintain your
						physical health by adding workouts to your calendar and tracking
						your progress over the months. So start your journey today!
					</p>
				</div>
				{/* Image div */}
				<div className="basis-1/3 flex-1">
					<img src={placeHolderImage} className="img-thumbnail" alt="..." />
				</div>
			</div>
		</section>
	);
}

export default HeroBanner;
