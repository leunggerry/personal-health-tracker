import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

import HeroBanner from '../components/HeroBanner';

// import images
import carousel1 from '../assets/images/desktop-dashboard1.png';
import carousel2 from '../assets/images/desktop-dashboard2.png';
import carousel3 from '../assets/images/desktop-dashboard3.png';

const LandingPage = () => {
	return (
		<>
			<HeroBanner />
			<Container>
				<Row>
					<Col>
						<h2 className="section-title">Header text</h2>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col>
						<Carousel className="Carousel-container" variant="dark">
							<Carousel.Item interval={1000} className="Carousel-item">
								<img
									className="d-block w-100"
									src={carousel1}
									alt="First slide"
								/>
							</Carousel.Item>
							<Carousel.Item interval={500} className="Carousel-item">
								<img
									className="d-block w-100"
									src={carousel2}
									alt="Second slide"
								/>
							</Carousel.Item>
							<Carousel.Item className="Carousel-item">
								<img
									className="d-block w-100"
									src={carousel3}
									alt="Third slide"
								/>
							</Carousel.Item>
						</Carousel>
					</Col>
				</Row>
			</Container>
			<Container>
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
							polaroid McSweeney's bitters cray gentrify tofu Marfa you probably
							haven't heard of them yr banh mi asymmetrical art party selvage
							letterpress High Life.
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default LandingPage;
