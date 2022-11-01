/**
 * Components to add
 *  - Workout cards
 */
import React, { useState, useEffect } from 'react';

import { useMutation } from '@apollo/client';
import WorkoutList from '../components/WorkoutList';
import { ADD_FAV_WORKOUT } from '../utils/mutations';

import { saveWorkoutIds, getWorkoutIds } from '../utils/localStorage';

const Workouts = () => {
	const [addWorkout] = useMutation(ADD_FAV_WORKOUT);

	// state to hold workout data
	const [loadedWorkouts, setloadedWorkouts] = useState([]);

	// state to hold saved workoutId values
	const [saveWorkoutIds, setsaveWorkoutIds] = useState('Hello World');

	// save list workoutIds to localStorage
	useEffect(() => {
		return () => saveWorkoutIds(saveWorkoutIds);
	});

	// handle adding a workout
	const handleSaveBook = async (workoutId) => {
		// find the workout by it's id
		const workoutToSave = loadedWorkouts.find(
			(workout) => workout.id === workoutId
		);

		try {
			const { data } = await addWorkout({
				variables: { favWorkoutId: addWorkout },
			});
			// if book successfully saves to user's account, save book id to state
			setsaveWorkoutIds([...saveWorkoutIds, workoutToSave.bookId]);
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<div className="container">
			<WorkoutList />
		</div>
	);
};

export default Workouts;
