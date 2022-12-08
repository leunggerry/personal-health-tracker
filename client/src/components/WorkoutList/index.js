/**
 * Components - Workout list
 */
import React from 'react';
import WorkoutCard from '../WorkoutCard';

function WorkoutList() {
	return (
		<div className="workout-list">
			<h2>Workout List</h2>
			<div className="flex-row">
				<WorkoutCard />
			</div>
		</div>
	);
}

export default WorkoutList;
