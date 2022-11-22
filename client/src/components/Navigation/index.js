import React from 'react';
import { Navbar } from 'flowbite-react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import DarkModeButton from '../DarkModeButton';

function Navigation() {
	function showNavigation() {
		if (Auth.loggedIn()) {
			return (
				<Navbar
					fluid={true}
					rounded={true}
					// className="border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
				>
					<Navbar.Brand href="/dashboard">
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
					<Navbar.Toggle />
					<Navbar.Collapse
						// TODO: add a blurred backdrop and remove bg color
						className="MENU dark:text-white"
						// className="MENU flex z-[10] pt-3 bg-gray-300 md:bg-white"
					>
						<Link to="/dashboard">Dashboard</Link>
						<Link to="/workouts">Workouts</Link>
						<Link to="/profile">Profile</Link>
						<a href="/" onClick={() => Auth.logout()} className="pl-0 py-0">
							Logout
						</a>
						<DarkModeButton />
					</Navbar.Collapse>
				</Navbar>
			);
		} else {
			return (
				<Navbar fluid={true} rounded={true}>
					<Navbar.Brand href="/">
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

					<Navbar.Toggle />
					<Navbar.Collapse className="MENU dark:text-white">
						{/* TODO: add gap between buttons */}
						<Link to="/signup">Signup</Link>
						<Link to="/login">Login</Link>
						<DarkModeButton />
					</Navbar.Collapse>
				</Navbar>
			);
		}
	}
	return (
		<>
			{showNavigation()}
			{/* <div className="px-2 h-16 bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
			</div> */}
		</>
	);
}

export default Navigation;
