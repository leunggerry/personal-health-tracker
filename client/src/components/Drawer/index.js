import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';
import { DELETE_FAV_WORKOUT, SCHEDULE_WORKOUT } from '../../utils/mutations';
import { UPDATE_FAVORITES, REMOVE_FROM_FAVORITE } from '../../utils/actions';
import { removeFavWorkoutId } from '../../utils/localStorage';
import { getDay, idbPromise } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';

export default function Drawer({ isOpen, setIsOpen }) {
	const [state, dispatch] = useStoreContext();
	const { favoriteWorkouts } = state;

	// Get User Data
	const { data, loading } = useQuery(QUERY_ME);
	const userData = data ? data.me : {};
	// console.log('userData: ', userData);

	/**
	 * @description
	 * Search the IDB and add any stored favorites to the GlobalState
	 */
	useEffect(() => {
		// If the User has items in their favWorkouts array, add it to 'favorites' IDB
		if (userData.favWorkouts) {
			dispatch({
				type: UPDATE_FAVORITES,
				favoriteWorkouts: userData.favWorkouts,
			});
			userData.favWorkouts.forEach((workout) => {
				idbPromise('favorites', 'put', workout);
			});
		}
		// Check for workoutData already store in IDB and put it in our GlobalState favoritesWorkouts array
		else if (!loading) {
			idbPromise('favorites', 'get').then((workouts) => {
				dispatch({
					type: UPDATE_FAVORITES,
					favoriteWorkouts: workouts,
				});
			});
		}
	}, [userData.favWorkouts, loading, dispatch]);

	// remove workoutout from IDB
	const removeFromFavorites = (workout) => {
		dispatch({
			type: REMOVE_FROM_FAVORITE,
			_id: workout._id,
		});
		idbPromise('favorites', 'delete', { ...workout });
	};

	//check if useEffect hook needs to run again
	const userDataLength = Object.keys(userData).length;

	//use mutation to remove workout from favourite
	const [removeFavWorkout] = useMutation(DELETE_FAV_WORKOUT);

	// remove favourite workout
	const handleRemoveFavouriteWorkout = async (workoutId) => {
		const token = Auth.loggedIn() ? Auth.getToken() : null;

		if (!token) {
			return false;
		}

		try {
			await removeFavWorkout({
				variables: { favWorkoutId: workoutId },
			});
			// upon success, remove book's id from localStorage
			removeFavWorkoutId(workoutId);
			window.location.reload();
		} catch (err) {
			console.error(err);
		}
	};
	// add workout to schedule
	getDay();
	const [scheduleWorkout] = useMutation(SCHEDULE_WORKOUT);
	const handleAddWorkoutToSchedule = async (workoutId) => {
		const token = Auth.loggedIn() ? Auth.getToken() : null;

		if (!token) {
			return false;
		}

		try {
			await scheduleWorkout({
				variables: {
					workoutDay: getDay(),
					favWorkoutId: workoutId,
				},
			});

			window.location.reload();
		} catch (err) {
			console.error(err);
		}
	};

	// if no data yet wait
	if (!userDataLength) {
		return <h2>LOADING...</h2>;
	}

	return (
		<main
			className={
				' fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
				(isOpen
					? ' transition-opacity opacity-100 duration-500 translate-x-0  '
					: ' transition-all delay-500 opacity-0 translate-x-full  ')
			}
		>
			<section
				className={
					'w-screen max-w-lg right-0 absolute bg-gray-50 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform dark:bg-gray-800 ' +
					(isOpen ? ' translate-x-0 ' : ' translate-x-full ')
				}
			>
				<article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
					<div className="md:container md:mx-auto flex flex-wrap items-center justify-between bg-[#ff457e] dark:text-white dark:bg-indigo-700">
						<h2 className="p-4 font-bold xs:text-2xl sm:text-4xl mt-0 mb-6">
							Favorite Workouts
						</h2>
						<div
							className="CROSS-ICON absolute top-0 right-0 px-8 py-4 cursor-pointer"
							onClick={() => setIsOpen(false)}
						>
							<svg
								className="h-8 w-8 text-gray-600 dark:text-white"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						</div>
					</div>
					{userData.favWorkouts.map((workout) => {
						return (
							<div
								key={workout._id}
								className="flex flex-row items-center dark:text-white xs:pr-5 sm:px-4"
							>
								<p className="px-3 flex-1 whitespace-nowrap">
									{workout.workoutName}
								</p>
								<div className="flex space-x-2 justify-center">
									<button
										type="button"
										className="inline-block px-4 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
										onClick={() => handleAddWorkoutToSchedule(workout._id)}
									>
										Add
									</button>
									<button
										type="button"
										className="inline-block px-4 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
										onClick={() => {
											handleRemoveFavouriteWorkout(workout._id);
											removeFromFavorites(workout);
										}}
									>
										Remove
									</button>
								</div>
							</div>
						);
					})}
				</article>
			</section>
			<section
				className="w-screen h-full cursor-pointer "
				onClick={() => {
					setIsOpen(false);
				}}
			></section>
		</main>
	);
}
