/**
 * Components - Workout cards
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { pluralize } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_WORKOUT, UPDATE_WORKOUT_LOGS } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

function WorkoutCard(workout) {
	const [state, dispatch] = useStoreContext();

	const { _id, workoutName, workoutDescription, setsCount, repsCount } =
		workout;

	const { workoutLog } = state;

	const addToWorkoutLog = () => {
		const workoutInCart = workoutLog.find(
			(workoutItem) => workoutItem._id === _id
		);
		if (workoutInCart) {
			dispatch({
				type: UPDATE_WORKOUT_LOGS,
				_id: _id,
				setsCount: parseInt(workoutInCart.setsCount) + 1,
			});
			idbPromise('cart', 'put', {
				...workoutInCart,
				setsCount: parseInt(workoutInCart.setsCount) + 1,
			});
		} else {
			dispatch({
				type: ADD_TO_WORKOUT,
				workoutLogs: { ...workout, setsCount: 1 },
			});
			idbPromise('workout', 'put', { ...workout, setsCount: 1 });
		}
	};

	return (
		<div className="card px-1 py-1">
			<div>
				{/* <img alt={name} src={`/images/${image}`} /> */}
				<p>{workoutName}</p>
			</div>
			<div>
				{/* <div>
					{quantity} {pluralize('item', quantity)} in stock
				</div> */}
				{/* <span>${price}</span> */}
			</div>
			<button onClick={addToWorkoutLog}>Add to cart</button>
		</div>
	);
}

export default WorkoutCard;
