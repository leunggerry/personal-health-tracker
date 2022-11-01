/**
 * Components contains
 * - MyWorkoutPlan
 * -Favorited workouts
 */
import React from 'react';
import { Heading, List, ListItem, Checkbox } from '@chakra-ui/react';

import WorkoutCard from '../WorkoutCard';
import WorkoutList from '../WorkoutList';

const FavoriteWorkouts = () => {
	return (
		<div className="container">
			<Heading as="h4" size="md">
				Favorite Workouts
			</Heading>
			<WorkoutList />
			{/* <List spacing={3}>
				<ListItem>
					<Checkbox defaultChecked>Push ups</Checkbox>
				</ListItem>
				<ListItem>
					<Checkbox defaultChecked>Ab Roll</Checkbox>
				</ListItem>
				<ListItem>
					<Checkbox defaultChecked>Band Back Fly</Checkbox>
				</ListItem>
			</List> */}
		</div>
	);
};

export default FavoriteWorkouts;
