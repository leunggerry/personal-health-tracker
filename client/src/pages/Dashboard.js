import React from 'react';
import FavoriteWorkouts from '../components/FavoriteWorkouts';
import WorkoutTable from '../components/WorkoutTable';
import WorkoutStats from '../components/WorkoutStats';
import Jumbotron from '../components/Jumbotron';
import Auth from '../utils/auth';

const Dashboard = () => {
	return Auth.loggedIn() ? (
		<section className="flex flex-col flex-wrap gap-4 md:justify-center lg:flex lg:flex-row p-2 dark:bg-gray-900">
			{/* FavoriteWorkouts */}
			{/* <aside className="2xl:basis-1/5">
				<FavoriteWorkouts />
			</aside> */}
			{/* WorkoutStats */}
			<div className="WorkoutStatsCard lg:basis-3/5 shadow-inner rounded-md">
				<FavoriteWorkouts />
				<WorkoutStats />
			</div>
			{/* Session Summary */}
			<div className="basis-full bg-gray-200-100-400 dark:text-white">
				{/* <div className="basis-full bg-gray-200-100-400"> */}
				<h4
					// className="text-2xl font-bold border-b-4 pb-2"
					className="font-medium leading-tight text-2xl mt-0 mb-2 border-b-4 pb-2"
				>
					Session Summary
				</h4>
				{/* <h5 className="text-xl font-bold">Monday</h5> */}
				<div className="workout-session">
					<h6 className="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">
						Session 1
					</h6>
					<div className="grid w-full sm:flex sm:flex-col sm:justify-center md:flex md:flex-col-2 gap-4 md:grid-cols-4 lg:flex-row">
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
			<div className="basis-full overflow-x-auto dark:text-white">
				{/* Workout Summary */}
				<div className="workout-logs-header">
					<h5 className="font-medium leading-tight text-xl mt-0 mb-2 border-b-4 pb-2">
						Workout Logs
					</h5>
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
