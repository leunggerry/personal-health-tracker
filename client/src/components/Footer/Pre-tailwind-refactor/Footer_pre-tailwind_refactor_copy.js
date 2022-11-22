import React from 'react';
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from './FooterStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
						<Heading>Source Code</Heading>
						<FooterLink
							href="https://github.com/leunggerry/personal-health-tracker"
							className="github social"
							id="github"
							target="_blank"
							rel="noreferrer"
						>
							{/* <i className="fab fa-facebook-f"> */}
							{/* <span style={{ marginLeft: '10px' }}>GitHub</span> */}
							<FontAwesomeIcon icon={faGithub} size="2x" />
							{/* </i> */}
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
