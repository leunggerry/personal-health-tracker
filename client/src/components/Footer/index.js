import React from 'react';
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from './FooterStyles';

const Footer = () => {
	return (
		<Box>
			<Container>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">Aim</FooterLink>
						<FooterLink href="#">Vision</FooterLink>
						<FooterLink href="#">Testimonials</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">Joseph Senyonga</FooterLink>
						<FooterLink href="#">Abdalla Hamdy</FooterLink>
						<FooterLink href="#">Gerry Leung</FooterLink>
						<FooterLink href="#">Ibrahim Imran</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="https://github.com/leunggerry/personal-health-tracker">
							<i className="fab fa-facebook-f">
								<span style={{ marginLeft: '10px' }}>GitHub</span>
							</i>
						</FooterLink>
						{/* <FooterLink href="#">
							<i className="fab fa-instagram">
								<span style={{ marginLeft: '10px' }}>LinkedIn</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span style={{ marginLeft: '10px' }}>Stack Overflow</span>
							</i>
						</FooterLink> */}
					</Column>
				</Row>
			</Container>
		</Box>
	);
};
export default Footer;
