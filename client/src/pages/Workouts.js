import React, { useEffect } from 'react';
import { Card, Button } from 'flowbite-react';

import Auth from '../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { useStoreContext } from '../utils/GlobalState';
import { ADD_TO_FAVORITES, UPDATE_FAVORITES } from '../utils/actions';
import { QUERY_ALL_WORKOUTS } from '../utils/queries';
import { ADD_FAV_WORKOUT } from '../utils/mutations';
import { UPDATE_WORKOUT_LIST } from '../utils/actions';
import Jumbotron from '../components/Jumbotron';
import { idbPromise } from '../utils/helpers';
import { saveWorkoutIds, getWorkoutIds } from '../utils/localStorage';

const Workouts = (favoriteWorkout) => {
	// Retrieve the current state from the global state object and the dispatch() method will update state
	const [state, dispatch] = useStoreContext();

	//  destructure dbWorkouts, workouts, favoriteWorkouts out of state
	const { dbWorkouts, workouts, favoriteWorkouts } = state;

	// const { _id } = favoriteWorkout;

	// loop through favoriteWorkouts array to get Ids
	const favoriteworkoutIds = favoriteWorkouts.map((workout) => workout._id);

	// * create state to hold saved workoutId values
	// const [savedWorkoutIds, setSavedWorkoutIds] = useState(getWorkoutIds());

	const [addWorkoutToFav] = useMutation(ADD_FAV_WORKOUT);

	// on page load, update savedWorkouts with contents of GlobalState favoritesWorkouts array
	useEffect(() => {
		return () => saveWorkoutIds(favoriteworkoutIds);
	});

	// useQuery to get all workouts
	const { loading, data: workoutData } = useQuery(QUERY_ALL_WORKOUTS);
	/**
	 * @description
	 * Update dbWorkouts global state array
	 */
	useEffect(() => {
		// if workoutData exists or has changed from the response of useQuery, then run dispatch()
		if (workoutData) {
			dispatch({
				type: UPDATE_WORKOUT_LIST,
				dbWorkouts: workoutData.workouts,
			});
			// Add workoutData to IBD
			workoutData.workouts.forEach((workout) => {
				idbPromise('workouts', 'put', workout);
			});
		}
		// Check for workoutData already store in IDB and put it in our GlobalState dbWorkouts array
		else if (!loading) {
			idbPromise('workouts', 'get').then((workouts) => {
				dispatch({
					type: UPDATE_WORKOUT_LIST,
					dbWorkouts: workouts,
				});
			});
		}
	}, [workoutData, favoriteWorkouts, loading, dispatch]);

	/**
	 * @description
	 * Search the IDB and add any stored favorites to the GlobalState
	 */
	useEffect(() => {
		idbPromise('favorites', 'get').then((workouts) => {
			dispatch({
				type: UPDATE_FAVORITES,
				favoriteWorkouts: workouts,
			});
		});
	}, [dispatch]);

	/**
	 * @description
	 * Add a workout to User favorites
	 */
	const addToFavorites = async (workout, workoutId) => {
		// find the workout by it's id
		const workoutToSave = dbWorkouts.find(
			(workout) => workout._id === workoutId
		);

		// Add workout to global state favoriteWorkouts array
		dispatch({
			type: ADD_TO_FAVORITES,
			dbWorkouts: { ...favoriteWorkout, workouts: workout },
		});
		idbPromise('favorites', 'put', workout);

		// add it to the User's data
		try {
			const { data } = await addWorkoutToFav({
				variables: { favWorkoutId: workoutToSave._id },
			});
			console.log('data:', data);

			window.location.reload();
		} catch (err) {
			console.error(err);
		}
	};

	function filterWorkouts() {
		if (!workouts) {
			return state.dbWorkouts;
		}

		return state.dbWorkouts.filter(
			(workout) => workout.category._id === workouts
		);
	}

	if (loading) {
		return <h2>LOADING...</h2>;
	}
	return Auth.loggedIn() ? (
		<section className="flex flex-col flex-wrap gap-4 md:justify-center lg:flex lg:flex-row p-2 dark:bg-gray-900">
			{state.dbWorkouts.length ? (
				<div className="min-w-max">
					{filterWorkouts().map((workout) => (
						<Card key={workout._id} _id={workout._id} border="dark">
							<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
								{workout.workoutName}
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
											{workout.workoutDescription}
										</p>
									</div>
								</div>
							</details>

							<Button
								// disabled={favoriteworkoutIds === workout._id}
								disabled={favoriteworkoutIds?.some(
									(savedWorkoutId) => savedWorkoutId === workout._id
								)}
								className="btn-block btn-blue"
								onClick={() => {
									addToFavorites(workout, workout._id);
								}}
								// onClick={() => addToFavorites(workout, workout._id)}
							>
								{favoriteworkoutIds?.some(
									(savedWorkoutId) => savedWorkoutId === workout._id
								)
									? 'Added to Favorites'
									: '+ Add To Favourties'}
							</Button>
						</Card>
					))}
				</div>
			) : (
				<h3>You haven't added any products yet!</h3>
			)}
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
