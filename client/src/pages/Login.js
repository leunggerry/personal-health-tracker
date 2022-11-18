import React, { useState } from 'react';
import { TextInput, Button } from 'flowbite-react';

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
			<form
				className="flex flex-col gap-4 rounded-lg bg-slate-300 pt-16 px-8 pb-11 xs:pt-8 xs:w-72 sm:w-80 2xl:w-96"
				onSubmit={handleFormSubmit}
			>
				<div className="grid grid-cols-1 dark:text-white ">
					<h2 className="text-3xl font-semibold mt-0 mx-0 mb-3 2xl:text-4xl flex justify-center">
						Login
					</h2>
					<h3 className="text-2xl text-gray-600 font-medium mt-0 mx-0 mb-7 xs:text-lg 2xl:text-3xl flex justify-center">
						Enter you credentials
					</h3>
				</div>
				<div>
					<TextInput
						placeholder="Username"
						name="username"
						type="username"
						id="username"
						onChange={handleChange}
					/>
				</div>
				<div>
					<TextInput
						placeholder="******"
						name="password"
						type="password"
						id="pwd"
						onChange={handleChange}
					/>
					{error ? (
						<div>
							<p className="text-red-700">
								The provided credentials are incorrect
							</p>
						</div>
					) : null}
					<Link to="/signup">Forgot your password?</Link>
				</div>
				<Button type="submit">LOGIN</Button>
			</form>
		</div>
	);
}

export default Login;
