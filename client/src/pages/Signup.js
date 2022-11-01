import React, { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Container, Grid, SimpleGrid } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
	const [formState, setFormState] = useState({ email: '', password: '' });
	const [addUser] = useMutation(ADD_USER);

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const mutationResponse = await addUser({
				variables: {
					email: formState.email,
					username: formState.username,
					password: formState.password,
					firstName: formState.firstName,
					lastName: formState.lastName,
				},
			});
			const token = mutationResponse.data.addUser.token;
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
				<Link to="/login" style={{ padding: '40px' }}>
					← Go to Login
				</Link>
				<SimpleGrid w={[300, 400, 500]} minChildWidth="120px">
					<div className="login-card">
						<h2>Signup</h2>
						<h3>Enter you credentials</h3>
						<form className="login-form" onSubmit={handleFormSubmit}>
							<input
								placeholder="First"
								name="firstName"
								type="firstName"
								id="firstName"
								onChange={handleChange}
							/>
							<input
								placeholder="Last"
								name="lastName"
								type="lastName"
								id="lastName"
								onChange={handleChange}
							/>
							<input
								placeholder="Username"
								name="username"
								type="username"
								id="username"
								onChange={handleChange}
							/>
							<input
								placeholder="youremail@test.com"
								name="email"
								type="email"
								id="email"
								onChange={handleChange}
							/>
							<input
								placeholder="******"
								name="password"
								type="password"
								id="pwd"
								onChange={handleChange}
							/>
							<button type="submit">SIGNUP</button>
						</form>
					</div>
				</SimpleGrid>
			</Grid>
		</Container>
	);
}

export default Signup;
