/**
 * Components - Workout list
 */

import React, { useEffect } from 'react';
import WorkoutCard from '../WorkoutCard';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_WORKOUTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_WORKOUTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function WorkoutList() {
	const [state, dispatch] = useStoreContext();

	const { workouts } = state;

	const { loading, data } = useQuery(QUERY_ALL_WORKOUTS);
	console.log('DATA: ', data);

	useEffect(() => {
		if (data) {
			dispatch({
				type: UPDATE_WORKOUTS,
				workouts: data.workouts,
			});
			data.workouts.forEach((workout) => {
				idbPromise('workouts', 'put', workout);
			});
		} else if (!loading) {
			idbPromise('workouts', 'get').then((workouts) => {
				dispatch({
					type: UPDATE_WORKOUTS,
					workouts: workouts,
				});
			});
		}
	}, [data, loading, dispatch]);

	function filterProducts() {
		if (!workouts) {
			console.log('NO CURRENT LOGS!');
			return state.currentLogs;
		}

		console.log('STATE.WORKOUTS: ', state.workouts);
		return state.workouts.filter((workoutItem) => workoutItem._id === workouts);
	}

	return (
		<div className="my-2">
			<h2>Exercises</h2>
			{state.workoutLogs.length ? (
				<div className="flex-row">
					{filterProducts().map((product) => (
						<WorkoutCard
							key={product._id}
							_id={product._id}
							image={product.image}
							name={product.name}
							price={product.price}
							quantity={product.quantity}
						/>
					))}
				</div>
			) : (
				<h3>You haven't added any products yet!</h3>
			)}
			{loading ? <img src={spinner} alt="loading" /> : null}
		</div>
	);
}

export default WorkoutList;
