/**
 * Components contains
 * - MyWorkoutPlan
 * -Favorited workouts
 */
import React from 'react';
import { Heading, List, ListItem, Checkbox } from '@chakra-ui/react';

const FavoriteWorkouts = () => {
	return (
		<div className="container">
			<Heading as="h4" size="md">
				Favorite Workouts
			</Heading>
			<List spacing={3}>
				<ListItem>
					<Checkbox defaultChecked>Push ups</Checkbox>
				</ListItem>
				<ListItem>
					<Checkbox defaultChecked>Ab Roll</Checkbox>
				</ListItem>
				<ListItem>
					<Checkbox defaultChecked>Band Back Fly</Checkbox>
				</ListItem>
			</List>
		</div>
	);
};

export default FavoriteWorkouts;
