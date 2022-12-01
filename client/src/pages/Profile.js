import React from 'react';

import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Jumbotron from '../components/Jumbotron';

const Profile = () => {
	// Get User Data
	const { data } = useQuery(QUERY_ME);
	console.log(data);
	const userData = data ? data.me : {};
	console.log(userData);

	return Auth.loggedIn() ? (
		<div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white dark:bg-gray-700 w-full mb-6 shadow-lg rounded-xl mt-16">
			<div className="px-6">
				<div className="flex flex-wrap justify-center">
					<div className="w-full flex justify-center">
						<div className="relative">
							<img
								src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
								className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
								alt=""
							/>
						</div>
					</div>
					<div className="text-center mt-32">
						<h3 className="text-2xl text-slate-700 dark:text-white font-bold leading-normal mb-1">
							{userData.firstName} {userData.lastName}
						</h3>
					</div>
					<div className="w-full text-center mt-2 pb-6">
						<div className="flex flex-col md:flex-row justify-center lg:pt-4 pt-8 pb-0 border-t border-slate-200">
							<div className="p-3 text-center">
								<span className="text-xl font-bold block uppercase tracking-wide text-slate-700 dark:text-white">
									{userData.email}
								</span>
								<span className="text-sm text-slate-400">Email</span>
							</div>
							<div className="p-3 text-center">
								<span className="text-xl font-bold block uppercase tracking-wide text-slate-700 dark:text-white">
									{userData.username}
								</span>
								<span className="text-sm text-slate-400">First Name</span>
							</div>
							<div className="p-3 text-center">
								<span className="text-xl font-bold block uppercase tracking-wide text-slate-700 dark:text-white">
									{userData.lastName}
								</span>
								<span className="text-sm text-slate-400">Last Name</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<Jumbotron>
			<h3 className="text-3xl font-bold dark:text-white">
				<span role="img" aria-label="shocked">
					😱
				</span>
				Oops, Sign up or Login to view this page!
			</h3>
		</Jumbotron>
	);
};

export default Profile;
