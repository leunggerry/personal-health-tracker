/**
 * Components - Workout cards
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { pluralize } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';
import {
	ADD_TO_WORKOUT,
	// =====================
	ADD_TO_CART,
	UPDATE_CART_QUANTITY,
} from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

function WorkoutCard(item) {
	const [state, dispatch] = useStoreContext();

	const { workoutName, workoutDescription, _id, setsCount, repsCount } = item;

	const { favoriteWorkouts } = state;

	const addToCart = () => {
		const itemInDB = favoriteWorkouts.find((workout) => workout._id === _id);
		if (itemInDB) {
			dispatch({
				type: ADD_TO_WORKOUT,
				_id: _id,
				quantity: parseInt(itemInDB.quantity) + 1,
			});
			idbPromise('workouts', 'put', {
				...itemInDB,
				purchaseQuantity: parseInt(itemInDB.purchaseQuantity) + 1,
			});
		} else {
			dispatch({
				type: ADD_TO_CART,
				product: { ...item, purchaseQuantity: 1 },
			});
			idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
		}
	};

	return (
		<div className="card px-1 py-1">
			<Link to={`/products/${_id}`}>
				<p>{workoutName}</p>
				<p>{workoutDescription}</p>
			</Link>
			<div>
				<div>
					{setsCount} {pluralize('set', setsCount)}
				</div>
				<span>
					{repsCount} {pluralize('rep', repsCount)}
				</span>
			</div>
			<button onClick={addToCart}>Add Workout</button>
		</div>
	);
}

export default WorkoutCard;
