import React, { useState } from 'react';
import { TextInput, Button } from 'flowbite-react';

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
		<section class="flex justify-center items-center h-screen">
			<form
				className="flex flex-col gap-4 rounded-lg bg-slate-300 pt-16 px-8 pb-11 xs:pt-8 xs:w-72 sm:w-80 2xl:w-96"
				onSubmit={handleFormSubmit}
			>
				<div className="grid grid-cols-1 dark:text-white ">
					<h2 className="text-3xl font-semibold mt-0 mx-0 mb-3 2xl:text-4xl flex justify-center">
						Signup
					</h2>
					<h3 className="text-2xl text-gray-600 font-medium mt-0 mx-0 mb-7 xs:text-lg 2xl:text-3xl flex justify-center">
						Enter you credentials
					</h3>
				</div>
				<div>
					<TextInput
						placeholder="First"
						name="firstName"
						type="firstName"
						id="firstName"
						onChange={handleChange}
					/>
				</div>
				<div>
					<TextInput
						placeholder="Last"
						name="lastName"
						type="lastName"
						id="lastName"
						onChange={handleChange}
					/>
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
						placeholder="youremail@test.com"
						name="email"
						type="email"
						id="email"
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
				</div>
				<Button type="submit">SIGNUP</Button>
			</form>
		</section>
	);
}

export default Signup;
