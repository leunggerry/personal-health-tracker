import React, { useState } from 'react';
import { Navbar, Button } from 'flowbite-react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Navigation() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	function showNavigation() {
		if (Auth.loggedIn()) {
			return (
				<Navbar fluid={true} rounded={true}>
					<Navbar.Brand href="https://flowbite.com/">
						<img
							alt="Capstone logo"
							src="/Capstone-logo60.png"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>
						<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
							Capstone
						</span>
					</Navbar.Brand>
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
					<Navbar.Brand href="https://flowbite.com/">
						<img
							alt="Capstone logo"
							src="/Capstone-logo60.png"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>
						<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
							Capstone
						</span>
					</Navbar.Brand>
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
		<header>
			<nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
				{showNavigation()}
			</nav>
		</header>
	);
}

export default Navigation;
