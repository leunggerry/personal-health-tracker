import React, { useState, useEffect } from 'react';
import { Card, Button, Tooltip } from 'flowbite-react';

import Auth from '../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { useStoreContext } from '../utils/GlobalState';
import WorkoutList from '../components/WorkoutList';
import { QUERY_ALL_WORKOUTS } from '../utils/queries';
import { ADD_FAV_WORKOUT } from '../utils/mutations';
import Jumbotron from '../components/Jumbotron';

import { saveWorkoutIds, getWorkoutIds } from '../utils/localStorage';

const Workouts = () => {
	const [addWorkoutToFav] = useMutation(ADD_FAV_WORKOUT);

	// useQuery to get all workouts
	const { loading, data } = useQuery(QUERY_ALL_WORKOUTS);
	const dbWorkouts = data?.workouts || {};
	console.log('DB Workouts: ', dbWorkouts);

	// state to hold workout data
	const [loadedWorkouts, setloadedWorkouts] = useState([]);

	// state to hold saved workoutId values
	const [savedWorkout, setsaveWorkoutIds] = useState(dbWorkouts);

	// save list workoutIds to localStorage
	useEffect(() => {
		return () => saveWorkoutIds(savedWorkout);
	});

	// handle adding a workout to favourites
	const handleAddWorkoutToFav = async (workoutId) => {
		// find the workout by it's id
		const workoutToSave = loadedWorkouts.find(
			(workout) => workout.id === workoutId
		);
		console.log(workoutId);
		try {
			const { data } = await addWorkoutToFav({
				variables: { favWorkoutId: workoutId },
			});

			console.log(data);

			window.location.reload();
		} catch (err) {
			console.error(err);
		}
	};

	if (loading) {
		return <h2>LOADING...</h2>;
	}
	return Auth.loggedIn() ? (
		<section className="flex flex-col flex-wrap gap-4 md:justify-center lg:flex lg:flex-row p-2 dark:bg-gray-900">
			{dbWorkouts.map((workoutItem) => {
				return (
					<div className="min-w-max">
						<Card key={workoutItem._id} border="dark">
							<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
								{workoutItem.workoutName}
							</h5>
							<details className="shadow-inner bg-gray-50 dark:bg-gray-600 rounded group mb-4">
								<summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:ring-red-400 rounded group-open:rounded-b-none group-open:z-[1] bg-gray-200 text-sm hover:bg-indigo-700 hover:text-gray-200">
									<h3 className="flex flex-1 p-4 font-semibold">Description</h3>
									<div className="flex w-10 items-center justify-center">
										<div className="border-8 border-transparent border-l-gray-600 dark:border-l-gray-900 ml-2 group-open:rotate-90 transition-transform origin-left"></div>
									</div>
								</summary>
								<div
									className="p-4 text-gray-700 dark:text-gray-900"
									id="scroll-container"
								>
									<div id="scroll-text" className="font-medium">
										<p className="font-normal text-gray-700 dark:text-gray-400">
											{workoutItem.workoutDescription}
										</p>
									</div>
								</div>
							</details>
							<Button
								className="btn-block btn-blue"
								onClick={() => handleAddWorkoutToFav(workoutItem._id)}
							>
								+ Add To Favourties
							</Button>
						</Card>
					</div>
				);
			})}
		</section>
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

export default Workouts;
