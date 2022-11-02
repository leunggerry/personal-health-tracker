/**
 * Components to add
 *  - Workout cards
 */
import React, { useState, useEffect } from 'react';
import { Container, CardColumns, Card, Button } from 'react-bootstrap';

import { useMutation, useQuery } from '@apollo/client';
import { useStoreContext } from '../utils/GlobalState';
import WorkoutList from '../components/WorkoutList';
import { QUERY_ALL_WORKOUTS } from '../utils/queries';
import { ADD_FAV_WORKOUT } from '../utils/mutations';

import { saveWorkoutIds, getWorkoutIds } from '../utils/localStorage';

const Workouts = () => {
	const [addWorkout] = useMutation(ADD_FAV_WORKOUT);

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

	// handle adding a workout
	const handleAddWorkout = async (workoutId) => {
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

	if (loading) {
		return <h2>LOADING...</h2>;
	}
	return (
		<>
			<Container>
				<CardColumns>
					{dbWorkouts.map((workoutItem) => {
						return (
							<Card key={workoutItem.Id} border="dark">
								<Card.Body>
									<Card.Title>{workoutItem.workoutName}</Card.Title>
									<p className="small"></p>
									<Card.Text>
										Description: {workoutItem.workoutDescription}
									</Card.Text>
									<Button
										className="btn-block btn-danger"
										onClick={() => handleAddWorkout(workoutItem.Id)}
									>
										+ Add
									</Button>
								</Card.Body>
							</Card>
						);
					})}
				</CardColumns>
			</Container>
		</>
	);
};

export default Workouts;
