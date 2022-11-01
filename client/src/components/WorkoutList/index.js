/**
 * Components - Workout list
 */
import React, { useEffect } from 'react';
import WorkoutCard from '../WorkoutCard';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_FAVOIRITE_WORKOUTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_WORKOUTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function WorkoutList() {
	const [state, dispatch] = useStoreContext();

	const { currentFavorites } = state;

	const { loading, data } = useQuery(QUERY_ALL_WORKOUTS);
	console.log('workoutList-DATA: ', data);

	useEffect(() => {
		if (data) {
			console.log('Data retrieved');
			// if there's data to be stored
			// store it in the global state object
			dispatch(
				{
					type: UPDATE_FAVOIRITE_WORKOUTS,
					favoriteWorkouts: data.workouts,
				},
				console.log('UPDATED favoriteWorkouts: ', data)
			);
			data.workouts.forEach((workout) => {
				idbPromise('workouts', 'put', workout);
			});
		} else if (!loading) {
			idbPromise('workouts', 'get').then((workouts) => {
				dispatch({
					type: UPDATE_FAVOIRITE_WORKOUTS,
					workouts: workouts,
				});
			});
		}
	}, [data, loading, dispatch]);

	function filterWorkouts() {
		if (!currentFavorites) {
			return state.workouts;
		}

		return state.workouts.filter((workout) => workout._id === currentFavorites);
	}

	return (
		<div className="my-2">
			{state.workouts.length ? (
				<div className="flex-row">
					{filterWorkouts().map((workouts) => (
						<WorkoutCard
							key={workouts._id}
							_id={workouts._id}
							workoutName={workouts.workoutName}
							workoutDescription={workouts.workoutDescription}
							setsCount={workouts.setsCount}
							repsCount={workouts.repsCount}
						/>
					))}
				</div>
			) : (
				<h3>You haven't added any workouts yet!</h3>
			)}
			{loading ? <img src={spinner} alt="loading" /> : null}
		</div>
	);
}

export default WorkoutList;
