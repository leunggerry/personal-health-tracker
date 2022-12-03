import React from 'react';
import Auth from '../utils/auth';
import { Carousel } from 'flowbite-react';

import HeroBanner from '../components/HeroBanner';
import WelcomePage from '../components/WelcomeUser';

// import images
import carousel1 from '../assets/images/solen-feyissa-7M-bcTN7w9c-unsplash.jpg';
import carousel2 from '../assets/images/sven-mieke-jO6vBWX9h9Y-unsplash.jpg';
import carousel3 from '../assets/images/victor-freitas-E2FLRJtZx2E-unsplash.jpg';

const LandingPage = () => {
	if (!Auth.loggedIn()) {
		return (
			<>
				<HeroBanner />
				<section
					className="w-screen mt-40 px-4 pb-20 py-10 relative bg-gray-200 dark:bg-slate-600"
					// className="container mx-auto py-8"
				>
					<div
						className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute translate-x-0"
						style={{ height: 80 }}
						// style="height: 80px; transform: translateZ(0px);"
					>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="text-gray-200 fill-current dark:fill-slate-600"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>
					{/* <Container>
					<Row>
						<Col>
							<h2 className="section-title">Header text</h2>
						</Col>
					</Row>
				</Container> */}
					<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
						<Carousel className="object-center h-auto">
							<img
								src={carousel1}
								alt="First slide"
								className="object-cover w-full h-full"
							/>
							<img
								src={carousel2}
								alt="Second slide"
								className="object-cover w-full h-full"
							/>
							<img
								src={carousel3}
								alt="Third slide"
								className="object-cover w-full h-full"
							/>
						</Carousel>
					</div>
					{/* <Container>
					<Row>
						<Col>
							<h2>Start Building Habits.</h2>
							<p>
								seitan heirloom post-ironic pop-up iPhone mlkshk hella selfies
								fashion axe occupy readymade put a bird on it messenger bag Wes
								Anderson Schlitz plaid Bushwick church-key lo-fi skateboard
								slow-carb hashtag trust fund Williamsburg biodiesel fixie
								farm-to-table 8-bit banjo XOXO Banksy chillwave bicycle rights
								retro cliche tattooed bespoke irony mumblecore Shoreditch deep v
								polaroid McSweeney's bitters cray gentrify tofu Marfa you
								probably haven't heard of them yr banh mi asymmetrical art party
								selvage letterpress High Life.
							</p>
						</Col>
					</Row>
				</Container> */}
				</section>
			</>
		);
	} else {
		return <WelcomePage />;
	}
};

export default LandingPage;
