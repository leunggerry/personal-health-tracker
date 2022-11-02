import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { Navbar, Button, Nav } from 'react-bootstrap';

function Navigation() {
	function showNavigation() {
		if (Auth.loggedIn()) {
			return (
				<Nav className="justify-content-space-between">
					<Nav.Item>
						<Link to="/dashboard" className="nav-link">
							Dashboard
						</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/workouts" className="nav-link">
							Workouts
						</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/profile" className="nav-link">
							Profile
						</Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/" onClick={() => Auth.logout()}>
							Logout
						</Nav.Link>
					</Nav.Item>
				</Nav>
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
			<Navbar variant="dark" sticky="top" >
				<Link to="/">
					<Navbar.Brand>
						<img
							alt="Capstone logo"
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
