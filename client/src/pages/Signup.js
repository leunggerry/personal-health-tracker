import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
	const [formState, setFormState] = useState({ email: '', password: '' });
	const [addUser] = useMutation(ADD_USER);

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		const mutationResponse = await addUser({
			variables: {
				email: formState.email,
				password: formState.password,
				firstName: formState.firstName,
				lastName: formState.lastName,
			},
		});
		const token = mutationResponse.data.addUser.token;
		Auth.login(token);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	return (
		<Container fluid="md" className="main">
			<Row className="justify-content-md-center">
				<Col>
					<div className="login-card">
						<Link to="/login">← Go to Login</Link>

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
				</Col>
			</Row>
		</Container>
	);
}

export default Signup;
