/**
 * Components contains
 * - MyWorkoutPlan
 * -Favorited workouts
 */
import React from 'react';
import { Heading, List, ListItem, Checkbox, Button } from '@chakra-ui/react';
import { useQuery, useMutation } from '@apollo/client';

import Auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';
import { DELETE_FAV_WORKOUT } from '../../utils/mutations';
import { removeFavWorkoutId } from '../../utils/localStorage';

const FavoriteWorkouts = () => {
	// Get User Data
	const { data } = useQuery(QUERY_ME);
	console.log(data);
	const userData = data ? data.me : {};
	console.log(userData);

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
		} catch (err) {
			console.error(err);
		}
	};
	// add workout to schedule
	const addWorkoutSchedule = async () => {};

	// if no data yet wait
	if (!userDataLength) {
		return <h2>LOADING...</h2>;
	}

	return (
		<div className="container">
			<Heading as="h4" size="md">
				Favorite Workouts
			</Heading>
			<List spacing={3}>
				{userData.favWorkouts.map((workout) => {
					return (
						<ListItem key={workout._id}>
							<Checkbox defaultChecked>{workout.workoutName}</Checkbox>
							<Button
								size="xs"
								colorScheme="red"
								onClick={() => handleRemoveFavouriteWorkout(workout._id)}
							>
								Remove
							</Button>
						</ListItem>
					);
				})}
				{/* <ListItem>
					<Checkbox defaultChecked>Push ups</Checkbox>
				</ListItem>
				<ListItem>
					<Checkbox defaultChecked>Ab Roll</Checkbox>
				</ListItem>
				<ListItem>
					<Checkbox defaultChecked>Band Back Fly</Checkbox>
				</ListItem> */}
			</List>
		</div>
	);
};

export default FavoriteWorkouts;
