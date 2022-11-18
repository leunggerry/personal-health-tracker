import React from 'react';
import FavoriteWorkouts from '../components/FavoriteWorkouts';
import WorkoutTable from '../components/WorkoutTable';
import WorkoutStats from '../components/WorkoutStats';
import Auth from '../utils/auth';

const Dashboard = () => {
	return Auth.loggedIn() ? (
		<section class="flex flex-col flex-wrap lg:flex lg:flex-row bg-blue-500 p-2">
			{/* FavoriteWorkouts */}
			<div class="basis-1/4 bg-red-400">
				<FavoriteWorkouts />
			</div>
			{/* WorkoutStats */}
			<div class="basis-1/2 bg-red-400">
				<WorkoutStats />
			</div>
			{/* Workout Summary */}
			<div class="basis-1/2 bg-gray-200-100-400">
				<h4 className="text-2xl font-bold dark:text-white">Session Summary</h4>
				<h5 className="text-xl font-bold dark:text-white">Monday</h5>
				<div className="workout-session">
					<span>Session 1</span>
					<div className="lg:flex gap-4">
						{/* <div className="sm:flex sm:items-center sm:justify-center"> */}
						{/* <div className="p-4 grid grid-cols-2"> */}
						<div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
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
						<div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
							<div>Actual Workout</div>
							<div>
								<span>00:03:35</span>
							</div>
						</div>
						<div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
							<div>Rest Timer</div>
							<div>
								<span>00:03:00</span>
							</div>
						</div>
						<div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
							<img alt="" src="/images/icons/weight.png" />
							<div>Weight Lifted</div>
							<div>
								<span>00:03:00</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="basis-1/2 bg-red-400">
				{/* Workout Summary */}
				<div className="workout-logs-header">
					<strong>Workout Logs</strong>
					<WorkoutTable />
				</div>
			</div>
		</section>
	) : (
		<section class="flex justify-center items-center h-screen">
			<h3 className="text-3xl font-bold dark:text-white">
				<span role="img" aria-label="shocked">
					😱
				</span>
				Oops, Sign up or Login to view this page!
			</h3>
		</section>
	);
};

export default Dashboard;
