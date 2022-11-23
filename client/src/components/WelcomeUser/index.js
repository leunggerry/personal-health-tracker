import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import runningMan from '../../assets/images/running.png';

export default function WelcomePage() {
	// Get User Data
	const { data } = useQuery(QUERY_ME);
	const userData = data ? data.me : {};

	return (
		// <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
		<div className="min-w-screen min-h-screen dark:bg-gray-900 flex xs:flex-col sm:flex-row items-center justify-center px-5 py-5">
			<div className="bg-indigo-900 text-white rounded shadow-xl py-5 px-5 lg:w-10/12 xl:w-3/4">
				<div className="flex flex-wrap lg:flex-row -mx-3 items-center">
					<div class="w-1/4 px-3 text-center hidden md:block">
						<div class="p-5 xl:px-8 md:py-5">
							<img src={runningMan} alt=""></img>
						</div>
					</div>
					<div className="w-full sm:w-1/2 md:w-2/4 px-3 text-left">
						<div className="p-5 xl:px-8 md:py-5 dark:text-white">
							<h3 className="text-2xl">
								Welcome,{' '}
								<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
									{userData.firstName}
								</span>
								!
							</h3>
							<h5 className="text-xl mb-3">Lorem ipsum sit amet</h5>
							<p className="text-sm text-gray-300 dark:text-gray-300">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
								sit asperiores perferendis odit enim natus ipsum reprehenderit
								eos eum impedit tenetur nemo corporis laboriosam veniam dolores
								quos necessitatibus, quaerat debitis.
							</p>
						</div>
					</div>
					<div className="w-full sm:w-1/2 md:w-1/4 px-3 text-center">
						<div className="p-5 xl:px-8 md:py-5">
							<Link
								to="/dashboard"
								className="block w-full py-2 px-4 rounded text-indigo-600 bg-gray-200 hover:bg-white hover:text-gray-900 focus:outline-none transition duration-150 ease-in-out mb-3"
							>
								Get Started
							</Link>
							<Link to="/profile">
								<button className="w-full py-2 px-4 rounded text-indigo-900 bg-indigo-400 hover:bg-gray-900 focus:outline-none transition duration-150 ease-in-out">
									Profile
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
