import React from 'react';
import FavoriteWorkouts from '../components/FavoriteWorkouts';
import WorkoutTable from '../components/WorkoutTable';
import WorkoutStats from '../components/WorkoutStats';
import Jumbotron from '../components/Jumbotron';
import Auth from '../utils/auth';

const Dashboard = () => {
	return Auth.loggedIn() ? (
		<section className="flex flex-col flex-wrap gap-4 md:justify-center lg:flex lg:flex-row bg-blue-500 p-2">
			{/* FavoriteWorkouts */}
			<div className="2xl:basis-1/3 bg-red-400">
				<FavoriteWorkouts />
			</div>
			{/* WorkoutStats */}
			<div className="lg:basis-3/5 bg-red-400">
				<WorkoutStats />
			</div>
			{/* Workout Summary */}
			<div className="basis-full bg-gray-200-100-400">
				<h4 className="text-2xl font-bold dark:text-white">Session Summary</h4>
				<h5 className="text-xl font-bold dark:text-white">Monday</h5>
				<div className="workout-session">
					<span>Session 1</span>
					<div className="md:flex md:flex-col lg:flex-row gap-4">
						<div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1 inline-flex text-gray-600 sm:text-base">
							<img
								className="object-none object-center w-16"
								alt=""
								src="/images/icons/stopwatch.png"
							/>
							<p>
								Session Length
								<br />
								<span>00:03:35</span>
							</p>
						</div>
						<div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1 inline-flex text-gray-600 sm:text-base">
							<img
								className="object-none object-center w-16"
								alt=""
								src="/images/icons/stopwatch.png"
							/>
							<p>
								Actual Workout
								<br />
								<span>00:03:35</span>
							</p>
						</div>
						<div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1 inline-flex text-gray-600 sm:text-base">
							<img
								className="object-none object-center w-16"
								alt=""
								src="/images/icons/stopwatch.png"
							/>
							<p>
								Rest Timer
								<br />
								<span>00:03:00</span>
							</p>
						</div>
						<div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1 inline-flex text-gray-600 sm:text-base">
							<img alt="" src="/images/icons/weight.png" />
							<p>
								Weight Lifted
								<br />
								<span>00:03:00</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="basis-full overflow-x-auto bg-red-400">
				{/* Workout Summary */}
				<div className="workout-logs-header">
					<strong>Workout Logs</strong>
					<WorkoutTable />
				</div>
			</div>
		</section>
	) : (
		// <section className="flex justify-center items-center h-screen">
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

export default Dashboard;
