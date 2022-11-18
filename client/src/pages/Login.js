import React, { useState } from 'react';
import { Label, TextInput, Button, Checkbox } from 'flowbite-react';
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
		<div class="container mx-auto xs:flex xs:justify-center md:flex">
			<form className="flex flex-col gap-4 rounded-lg bg-slate-300 pt-16 px-8 pb-11 xs:w-72 sm:w-80 2xl:w-96 ">
				<div>
					<div className="mb-2 block">
						<Label htmlFor="email1" value="Your email" />
					</div>
					<TextInput
						id="email1"
						type="email"
						placeholder="name@flowbite.com"
						required={true}
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label htmlFor="password1" value="Your password" />
					</div>
					<TextInput id="password1" type="password" required={true} />
				</div>
				<div className="flex items-center gap-2">
					<Checkbox id="remember" />
					<Label htmlFor="remember">Remember me</Label>
				</div>
				<Button type="submit">Submit</Button>
			</form>
		</div>
	);
}

export default Login;
