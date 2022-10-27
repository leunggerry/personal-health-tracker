import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { default as NavBoostrap } from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Nav() {
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
				<NavBoostrap className="justify-content-end" as="ul">
					<NavBoostrap.Item as="li">
						<Button variant="secondary">
							<Link to="/signup">Signup</Link>
						</Button>{' '}
						<Button variant="secondary">
							<Link to="/login">Login</Link>
						</Button>{' '}
					</NavBoostrap.Item>
				</NavBoostrap>
			);
		}
	}
	return (
		<Navbar bg="dark" variant="dark" sticky="top">
			<Container>
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

				{showNavigation()}
			</Container>
		</Navbar>
	);
}

export default Nav;
