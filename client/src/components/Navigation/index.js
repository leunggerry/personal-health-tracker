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
					<Navbar.Collapse className="flex flex-col items-center">
						<Link to="/dashboard" className="pt-1 pb-4">
							Dashboard
						</Link>
						<Link to="/workouts" className="pt-1 pb-4">
							Workouts
						</Link>
						<Link to="/profile" className="pt-1 pb-4">
							Profile
						</Link>
						<Button size="xs" variant="secondary">
							<a href="/" onClick={() => Auth.logout()}>
								Logout
							</a>
						</Button>{' '}
						{/* <Navbar.Link href="/" onClick={() => Auth.logout()}>
							Logout
						</Navbar.Link> */}
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
			<div className="px-2 h-16 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
				{showNavigation()}
			</div>
		</header>
	);
}

export default Navigation;
