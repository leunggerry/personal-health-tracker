import React from 'react';
import placeHolderImage from '../../assets/images/kelly-sikkema-bE6k8SQT2FQ-unsplash.jpg';
import { ChakraProvider, extendTheme, Heading, Text } from '@chakra-ui/react';
import Fonts from '../../assets/Fonts';

const theme = extendTheme({
	fonts: {
		heading: 'Open Sans',
		body: 'Verdana',
	},
});
function HeroBanner() {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />

			{/* <Stack> */}
			<section className="hero">
				<div className="hero-cta">
					<Heading fontSize="6xl">Make your health a priority.</Heading>
					<br />
					<Text fontSize="2xl">
						Add Capstone Fitness to your workout routine and see the results for
						yourself! This daily workout tracker will help you maintain your
						physical health by adding workouts to your calendar and tracking
						your progress over the months. So start your journey today!
					</Text>
				</div>
				<div className="hero-form">
					<img src={placeHolderImage} className="img-thumbnail" alt="..." />
				</div>
			</section>

			{/* </Stack> */}
		</ChakraProvider>
	);
}

export default HeroBanner;
