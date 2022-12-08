import { Table } from 'flowbite-react';

import Auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';
import { REMOVE_SCHEDULE_WORKOUT } from '../../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import { getDay } from '../../utils/helpers';

function WorkoutTable() {
	// Get User Data
	const { data } = useQuery(QUERY_ME);

	const userData = data ? data.me : {};

	//check if useEffect Hook needs to run again
	const userDataLength = Object.keys(userData).length;

	//mutation to remove schedule workout
	const [removeScheduleWorkout] = useMutation(REMOVE_SCHEDULE_WORKOUT);

	// handle remove scheduled workout
	const handleRemoveScheduleWorkout = async (workoutId) => {
		const token = Auth.loggedIn() ? Auth.getToken() : null;

		if (!token) {
			return false;
		}

		try {
			await removeScheduleWorkout({
				variables: {
					workoutDay: getDay(),
					favWorkoutId: workoutId,
				},
			});

			//reload the screen
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};

	// get todays workouts
	let todaysWorkouts;
	if (userDataLength > 0) {
		// console.log(userData);
		todaysWorkouts = userData[getDay()];
		// console.log(todaysWorkouts);
	}
	return (
		<Table className="shadow-2xl">
			<Table.Head className="tableHead">
				<Table.HeadCell>Exercise Name</Table.HeadCell>
				<Table.HeadCell>Lifting Logs</Table.HeadCell>
				<Table.HeadCell>
					<span className="sr-only">Remove Workout</span>
				</Table.HeadCell>
			</Table.Head>
			<Table.Body>
				{todaysWorkouts &&
					todaysWorkouts.map((workout) => {
						return (
							<Table.Row
								key={workout._id}
								className="bg-white dark:border-gray-700 dark:bg-gray-800"
							>
								<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
									{workout.workoutName}
								</Table.Cell>
								<Table.Cell>
									<div>
										{workout.setsCount} Sets - {workout.repsCount} Laps/Reps
									</div>
								</Table.Cell>
								<Table.Cell>
									<button
										type="button"
										size="xs"
										className="inline-block px-4 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
										onClick={() => handleRemoveScheduleWorkout(workout._id)}
									>
										Remove
									</button>
									{/* <Button
										size="xs"
										// colorScheme="red"
										onClick={() => handleRemoveScheduleWorkout(workout._id)}
									>
										Remove Workout
									</Button> */}
								</Table.Cell>
							</Table.Row>
						);
					})}
			</Table.Body>
		</Table>
	);
}

export default WorkoutTable;
