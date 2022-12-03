import React from 'react';
import stackedDevices from '../../assets/images/stackedDevices.png';
import { Link } from 'react-router-dom';

function HeroBanner() {
	return (
		<section
			className="header relative items-center flex h-screen my-32 md:py-16 md:my-0"
			style={{ maxHeight: 860 }}
		>
			<div className="container mx-auto px-4 my-16 ">
				<div className="items-center flex flex-col md:flex-row-reverse">
					{/* Image div */}
					<div className="w-full md:w-5/12 px-4 mr-auto ml-auto my-16 md:my-0">
						<img
							alt="mutltiple devices showing app features"
							className="max-w-full rounded-lg"
							src={stackedDevices}
						/>
					</div>
					{/* CTA */}
					<div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
						<div className="pt-0 md:pt-32">
							<h2 className="font-['Open Sans'] italic font-semibold text-4xl text-gray-700 dark:text-white">
								Make your{' '}
								<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
									health a priority
								</span>{' '}
							</h2>
							<p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
								Add Capstone Fitness to your workout routine and see the results
								for yourself! This daily workout tracker will help you maintain
								your physical health by adding workouts to your calendar and
								tracking your progress over the months. So start your journey
								today!
							</p>
							<div className="mt-12">
								<div className="flex flex-wrap">
									<div className="w-full md:w-6/12 p-1">
										<Link
											to="/signup"
											className="w-full md:w-40 inline-flex items-center uppercase justify-center rounded-md shadow-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
										>
											Get started
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroBanner;
