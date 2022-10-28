import React from 'react';
import placeHolderImage from '../../assets/images/kelly-sikkema-bE6k8SQT2FQ-unsplash.jpg';

function HeroBanner() {
	return (
		<section className="hero">
			<div className="hero-cta">
				<h2>Make your health a priority.</h2>
				<p>
					Add Capstone Fitness to your workout routine and see the results for
					yourself! This daily workout tracker will help you maintain your
					physical health by adding workouts to your calendar and tracking your
					progress over the months. So start your journey today!
				</p>
			</div>
			<div className="hero-form">
				<img src={placeHolderImage} className="img-thumbnail" alt="..." />
			</div>
		</section>
	);
}

export default HeroBanner;
