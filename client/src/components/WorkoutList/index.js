/**
 * Components - Workout list
 */

import React, { useEffect } from 'react';
import WorkoutCard from '../WorkoutCard';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_WORKOUTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function WorkoutList() {
	const [state, dispatch] = useStoreContext();

	const { currentCategory } = state;

	const { loading, data } = useQuery(QUERY_PRODUCTS);

	useEffect(() => {
		if (data) {
			dispatch({
				type: UPDATE_WORKOUTS,
				products: data.products,
			});
			data.products.forEach((product) => {
				idbPromise('products', 'put', product);
			});
		} else if (!loading) {
			idbPromise('products', 'get').then((products) => {
				dispatch({
					type: UPDATE_WORKOUTS,
					products: products,
				});
			});
		}
	}, [data, loading, dispatch]);

	function filterProducts() {
		if (!currentCategory) {
			return state.products;
		}

		return state.workoutLogs.filter(
			(product) => product.category._id === currentCategory
		);
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
