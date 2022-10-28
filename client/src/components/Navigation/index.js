import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { Navbar, Button, Nav } from 'react-bootstrap';

function Navigation() {
	function showNavigation() {
		if (Auth.loggedIn()) {
			return (
				<ul className="flex-row">
					<li className="mx-1">
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<li className="mx-1">
						<Link to="/workouts">Workouts</Link>
					</li>
					<li className="mx-1">
						<Link to="/profile">Profile</Link>
					</li>
					<li className="mx-1">
						{/* this is not using the Link component to logout or user and then refresh the application to the start */}
						<a href="/" onClick={() => Auth.logout()}>
							Logout
						</a>
					</li>
				</ul>
			);
		} else {
			return (
				<Nav className="justify-content-end" as="ul">
					<Nav.Item as="li">
						<Button variant="secondary">
							<Link to="/signup">Signup</Link>
						</Button>{' '}
						<Button variant="secondary">
							<Link to="/login">Login</Link>
						</Button>{' '}
					</Nav.Item>
				</Nav>
			);
		}
	}
	return (
		<header>
			<Navbar variant="dark" sticky="top">
				<Link to="/">
					<Navbar.Brand>
						<img
							alt=""
							src="/Capstone-logo60.png"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{' '}
						Capstone
					</Navbar.Brand>
				</Link>
			</Navbar>
			{showNavigation()}
		</header>
	);
}

export default Navigation;
