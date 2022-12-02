import React from 'react';
import { Navbar } from 'flowbite-react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import DarkModeButton from '../DarkModeButton';

function Navigation() {
	function showNavigation() {
		if (Auth.loggedIn()) {
			return (
				<Navbar fluid={true} rounded={true}>
					<Link to="/dashboard">
						<div className="container flex flex-wrap items-center justify-between mx-auto">
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
						</div>
					</Link>
					<Navbar.Toggle />
					<Navbar.Collapse className="MENU dark:text-white">
						<div className="DarkModeButton">
							<DarkModeButton />
						</div>
						<Link className="navListItem" to="/dashboard">
							Dashboard
						</Link>
						<Link className="navListItem" to="/workouts">
							Workouts
						</Link>
						<Link className="navListItem" to="/profile">
							Profile
						</Link>
						<a
							className="navListItem pl-0 py-0"
							href="/"
							onClick={() => Auth.logout()}
						>
							Logout
						</a>
					</Navbar.Collapse>
				</Navbar>
			);
		} else {
			return (
				<Navbar fluid={true} rounded={true}>
					<Link to="/">
						<div className="container flex flex-wrap items-center justify-between mx-auto">
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
						</div>
					</Link>
					<Navbar.Toggle />
					<Navbar.Collapse className="MENU dark:text-white">
						<div className="DarkModeButton">
							<DarkModeButton />
						</div>
						<Link className="navListItem" to="/signup">
							Signup
						</Link>
						<Link className="navListItem" to="/login">
							Login
						</Link>
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
