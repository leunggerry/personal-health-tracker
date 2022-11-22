import { Table, Button } from 'flowbite-react';

import Auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';
import { REMOVE_SCHEDULE_WORKOUT } from '../../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import { getDay } from '../../utils/helpers';

function StripedColumnsExample() {
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
		console.log(userData);
		todaysWorkouts = userData[getDay()];
		console.log(todaysWorkouts);
	}
	return (
		<Table>
			<Table.Head>
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
									<Button
										size="xs"
										// colorScheme="red"
										onClick={() => handleRemoveScheduleWorkout(workout._id)}
									>
										Remove Workout
									</Button>
								</Table.Cell>
							</Table.Row>
						);
					})}
			</Table.Body>
			{/* <Table.Body className="divide-y">
				<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
					<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
						Sit Ups
					</Table.Cell>
					<Table.Cell>5 Sets - 20 Laps/Reps</Table.Cell>
					<Table.Cell>
						<a
							href="/tables"
							className="font-medium text-blue-600 hover:underline dark:text-blue-500"
						>
							Remove Workout
						</a>
					</Table.Cell>
				</Table.Row>
			</Table.Body> */}
		</Table>
	);
}

export default StripedColumnsExample;
