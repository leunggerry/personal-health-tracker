import React from 'react';
import { Sidebar, Checkbox, Button } from 'flowbite-react';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';
import { DELETE_FAV_WORKOUT, SCHEDULE_WORKOUT } from '../../utils/mutations';
import { removeFavWorkoutId } from '../../utils/localStorage';
import { getDay } from '../../utils/helpers';

export default function Drawer({ isOpen, setIsOpen }) {
	// Get User Data
	const { data } = useQuery(QUERY_ME);
	//console.log(data);
	const userData = data ? data.me : {};
	//console.log(userData);

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
					'w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform dark:bg-gray-800 ' +
					(isOpen ? ' translate-x-0 ' : ' translate-x-full ')
				}
			>
				<article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
					<div className="container flex flex-wrap items-center justify-between mx-auto">
						<header className="p-4 font-bold text-lg">Header</header>
						<div
							className="CROSS-ICON absolute top-0 right-0 px-8 py-4 cursor-pointer"
							// className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
							// change isNavOpen state to false to close the menu
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
								className="flex flex-row items-center dark:text-white"
							>
								<p className="px-3 flex-1 whitespace-nowrap">
									{workout.workoutName}
								</p>
								<div class="flex space-x-2 justify-center">
									<button
										type="button"
										class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
										onClick={() => handleAddWorkoutToSchedule(workout._id)}
									>
										Add
									</button>
									<button
										type="button"
										class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
										onClick={() => handleRemoveFavouriteWorkout(workout._id)}
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