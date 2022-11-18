import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Navigation() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	function showNavigation() {
		if (Auth.loggedIn()) {
			return (
				<nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
					<div className="container flex flex-wrap items-center justify-between mx-auto">
						<a href="/" className="flex items-center">
							<img
								src="/Capstone-logo60.png"
								className="h-6 mr-3 sm:h-10"
								alt="Capstone Logo"
							/>
							<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
								Capstone
							</span>
						</a>
						<button
							data-collapse-toggle="navbar-dropdown"
							type="button"
							className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							aria-controls="navbar-dropdown"
							aria-expanded={isNavOpen ? 'true' : 'false'}
							onClick={() => setIsNavOpen((prev) => !prev)}
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="w-6 h-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"
								></path>
							</svg>
						</button>
						<div
							className={
								isNavOpen
									? 'w-full md:block md:w-auto'
									: 'hidden w-full md:block md:w-auto'
							}
							id="navbar-dropdown"
						>
							<ul className="flex flex-col p-4 mt-4 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
								<li>
									<Link
										to="/dashboard"
										className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
									>
										Dashboard
									</Link>
								</li>
								<li>
									<Link
										to="/workouts"
										className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
									>
										Workouts
									</Link>
								</li>
								<li>
									<Link
										to="/profile"
										className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
									>
										Profile
									</Link>
								</li>
								<li>
									<a
										href="/"
										className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
									>
										Logout
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			);
		} else {
			return (
				<nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
					<div className="container flex flex-wrap items-center justify-between mx-auto">
						<a href="/" className="flex items-center">
							<img
								src="/Capstone-logo60.png"
								className="h-6 mr-3 sm:h-10"
								alt="Capstone Logo"
							/>
							<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
								Capstone
							</span>
						</a>
						<button
							data-collapse-toggle="navbar-dropdown"
							type="button"
							className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							aria-controls="navbar-dropdown"
							aria-expanded={isNavOpen ? 'true' : 'false'}
							onClick={() => setIsNavOpen((prev) => !prev)}
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="w-6 h-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"
								></path>
							</svg>
						</button>
						<div
							className={
								isNavOpen
									? 'w-full md:block md:w-auto'
									: 'hidden w-full md:block md:w-auto'
							}
							id="navbar-dropdown"
						>
							<ul className="flex flex-col p-4 mt-4 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
								<li>
									<a
										href="/"
										className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
									>
										Signup
									</a>
								</li>
								<li>
									<a
										href="/"
										className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
									>
										Logout
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			);
		}
	}

	// TODO: this function is not being called in the header for now... will look at adding it later
	//if logged in direct to dashboard
	function bannerDirect() {
		if (Auth.loggedIn()) {
			return (
				<Link to="/dashboard">
					<nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
						<img
							alt="Capstone logo"
							src="/Capstone-logo60.png"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{' '}
						Capstone
					</nav>
				</Link>
			);
		}
		//else not logged in
		else {
			return (
				<Link to="/">
					<nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
						<img
							alt="Capstone logo"
							src="/Capstone-logo60.png"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{' '}
						Capstone
					</nav>
				</Link>
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
