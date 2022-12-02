import React, { useState, useEffect } from 'react';
import { Card, Button } from 'flowbite-react';

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
	console.log('DB Workouts: ', dbWorkouts.workouts);

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
					<div className="max-w-sm">
						<Card key={workoutItem._id} border="dark">
							<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
								{workoutItem.workoutName}
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								{workoutItem.workoutDescription}
							</p>
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
