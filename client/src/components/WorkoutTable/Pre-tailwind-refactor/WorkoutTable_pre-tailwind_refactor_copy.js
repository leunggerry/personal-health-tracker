import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Button,
} from '@chakra-ui/react';

import Modal from '../Modal';

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
		<TableContainer>
			<Table variant="simple">
				<TableCaption>
					{/* <Button variant="primary">+ Add Workout</Button> */}
					<Modal />
				</TableCaption>
				<Thead>
					<Tr>
						<Th>Exercise Name</Th>
						<Th>Lifting Logs</Th>
						<Th>Remove Workout</Th>
					</Tr>
				</Thead>
				<Tbody>
					{todaysWorkouts &&
						todaysWorkouts.map((workout) => {
							return (
								<Tr key={workout._id}>
									<Td>{workout.workoutName}</Td>
									<Td>
										<div>
											{workout.setsCount} Sets - {workout.repsCount} Laps/Reps
										</div>
									</Td>
									<Td>
										<Button
											size="xs"
											colorScheme="red"
											onClick={() => handleRemoveScheduleWorkout(workout._id)}
										>
											Remove Workout
										</Button>
									</Td>
								</Tr>
							);
						})}
				</Tbody>
			</Table>
		</TableContainer>
	);
}

export default StripedColumnsExample;
