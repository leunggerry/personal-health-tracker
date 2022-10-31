import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
	const [formState, setFormState] = useState({ email: '', password: '' });
	const [login, { error }] = useMutation(LOGIN);

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			const mutationResponse = await login({
				variables: { email: formState.email, password: formState.password },
			});
			const token = mutationResponse.data.login.token;
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
		<Container fluid="md" className="main">
			<Row className="justify-content-md-center">
				<Col>
					<div className="login-card">
						<Link to="/signup">← Go to Signup</Link>

						<h2>Login</h2>
						<h3>Enter you credentials</h3>
						<form className="login-form" onSubmit={handleFormSubmit}>
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
				</Col>
			</Row>
		</Container>
	);
}

export default Login;
