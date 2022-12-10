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
		<section className="flex justify-center items-center h-full">
			<div className="container py-12 px-6 h-full">
				<div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
					<div className="xl:w-4/12">
						<div className="block bg-white dark:bg-gray-800 dark:text-white shadow-2xl rounded-lg">
							<div className="xs:p-4 md:p-12 md:mx-6">
								<div className="text-center">
									<img
										className="mx-auto"
										src="/favicon-32x32.png"
										alt="Capstone logo"
									/>
									<h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
										Start your Journey
									</h4>
								</div>
								<form onSubmit={handleFormSubmit}>
									<p className="mb-4">Enter you credentials</p>
									<div className="mb-4">
										<input
											className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											placeholder="First"
											name="firstName"
											type="firstName"
											id="firstName"
											onChange={handleChange}
										/>
									</div>
									<div className="mb-4">
										<input
											className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											placeholder="Last"
											name="lastName"
											type="lastName"
											id="lastName"
											onChange={handleChange}
										/>
									</div>
									<div className="mb-4">
										<input
											className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											placeholder="Username"
											name="username"
											type="username"
											id="username"
											onChange={handleChange}
										/>
									</div>
									<div className="mb-4">
										<input
											className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											placeholder="youremail@test.com"
											name="email"
											type="email"
											id="email"
											onChange={handleChange}
										/>
									</div>
									<div className="mb-4">
										<input
											className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											placeholder="Enter your password"
											name="password"
											type="password"
											id="pwd"
											onChange={handleChange}
										/>
									</div>
									<div className="text-center pt-1 mb-12 pb-1">
										<button
											className="login-signup inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
											type="submit"
											data-mdb-ripple="true"
											data-mdb-ripple-color="light"
										>
											Signup
										</button>
									</div>
									<div className="flex items-center justify-between pb-6">
										<p className="mb-0 mr-2">Already have an account?</p>
										<Link to="/login">
											<button
												type="button"
												className="inline-block px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
												data-mdb-ripple="true"
												data-mdb-ripple-color="light"
											>
												Log in
											</button>
										</Link>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Signup;
