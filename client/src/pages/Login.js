import React, { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Container, Grid, SimpleGrid } from '@chakra-ui/react';

import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
	const [formState, setFormState] = useState({ username: '', password: '' });
	const [login, { error }] = useMutation(LOGIN);

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			const mutationResponse = await login({
				variables: {
					username: formState.username,
					password: formState.password,
				},
			});
			const token = mutationResponse.data.login.token;
			// Save the login token in local storage
			Auth.login(token);
		} catch (e) {
			console.log(e);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	return (
		<Container fluid="md" className="main" centerContent>
			<Grid>
				<Link to="/signup" style={{ padding: '40px' }}>
					← Go to Signup
				</Link>
				<SimpleGrid w={[300, 400, 500]} minChildWidth="120px">
					<div className="login-card">
						<h2>Login</h2>
						<h3>Enter you credentials</h3>
						<form className="login-form" onSubmit={handleFormSubmit}>
							<input
								placeholder="Username"
								name="username"
								type="username"
								id="username"
								onChange={handleChange}
							/>
							<input
								placeholder="******"
								name="password"
								type="password"
								id="pwd"
								onChange={handleChange}
							/>
							{error ? (
								<div>
									<p className="error-text">
										The provided credentials are incorrect
									</p>
								</div>
							) : null}
							{/* TODO: make sure the forgor your password link leads somewhere */}
							<Link to="/signup">Forgot your password?</Link>
							<button type="submit">LOGIN</button>
						</form>
					</div>
				</SimpleGrid>
			</Grid>
		</Container>
	);
}

export default Login;
