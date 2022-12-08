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
						{/* <Link className="navListItem" to="/signup">
							Signup
						</Link> */}
						<Link className="navListItem text-2xl" to="/login">
							<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
								<span className="relative px-5 py-2.5 transition-all ease-in duration-75 uppercase bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
									Login
								</span>
							</button>
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
