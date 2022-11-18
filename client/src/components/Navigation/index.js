import React from 'react';
import { Navbar, Button } from 'flowbite-react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Navigation() {
	function showNavigation() {
		if (Auth.loggedIn()) {
			return (
				<Navbar fluid={true} rounded={true}>
					<Link to="/dashboard">
						<Navbar.Brand>
							<img
								alt="Capstone logo"
								src="/Capstone-logo60.png"
								width="30"
								height="30"
								className="mr-3"
							/>
							<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
								Capstone
							</span>
						</Navbar.Brand>
					</Link>
					<Navbar.Toggle />
					<Navbar.Collapse>
						<Navbar.Link href="/navbars" active={true}>
							Home
						</Navbar.Link>
						<Navbar.Link href="/navbars">About</Navbar.Link>
						<Navbar.Link href="/navbars">Services</Navbar.Link>
						<Navbar.Link href="/navbars">Pricing</Navbar.Link>
						<Navbar.Link href="/navbars">Contact</Navbar.Link>
					</Navbar.Collapse>
				</Navbar>
			);
		} else {
			return (
				<Navbar fluid={true} rounded={true}>
					<Link to="/">
						<Navbar.Brand>
							<img
								alt="Capstone logo"
								src="/Capstone-logo60.png"
								width="30"
								height="30"
								className="mr-3"
							/>
							<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
								Capstone
							</span>
						</Navbar.Brand>
					</Link>
					<Navbar.Toggle />
					<Navbar.Collapse>
						{/* TODO: add gap between buttons */}
						<Button variant="secondary">
							<Link to="/signup">Signup</Link>
						</Button>{' '}
						<Button variant="secondary">
							<Link to="/login">Login</Link>
						</Button>{' '}
					</Navbar.Collapse>
				</Navbar>
			);
		}
	}
	return (
		<header className="shadow-md">
			<div className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
				{showNavigation()}
			</div>
		</header>
	);
}

export default Navigation;
