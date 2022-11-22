import React from 'react';
import { Sidebar, Checkbox, Button } from 'flowbite-react';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';
import { DELETE_FAV_WORKOUT, SCHEDULE_WORKOUT } from '../../utils/mutations';
import { removeFavWorkoutId } from '../../utils/localStorage';
import { getDay } from '../../utils/helpers';

const FavoriteWorkouts = () => {
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
		<div className="flex">
			<Sidebar
				// className="xs:w-screen"
				className="md:w-full"
				aria-label="Sidebar with Favorite workouts"
			>
				<h4 className="text-2xl font-bold dark:text-white">
					Favorite Workouts
				</h4>

				<Sidebar.Items className="pt-3 flex-col h-96">
					<Sidebar.ItemGroup>
						{userData.favWorkouts.map((workout) => {
							return (
								<div key={workout._id} className="flex flex-row items-center">
									<p className="px-3 flex-1 whitespace-nowrap">
										{workout.workoutName}
									</p>
									<Button.Group>
										<Button
											className="py-0 px-0 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-700 dark:hover:bg-red-500 dark:focus:ring-blue-800"
											onClick={() => handleRemoveFavouriteWorkout(workout._id)}
										>
											Remove
										</Button>
										<Button
											className="py-0 px-0 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
											onClick={() => handleAddWorkoutToSchedule(workout._id)}
										>
											Schedule
										</Button>
									</Button.Group>
								</div>
							);
						})}
					</Sidebar.ItemGroup>
				</Sidebar.Items>
			</Sidebar>
		</div>
	);
};

export default FavoriteWorkouts;
