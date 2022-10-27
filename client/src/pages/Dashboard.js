/**
 * Components to add
 *  - Favories (favorited workouts)
 *  - Calendar
 */
import React from 'react';
import FavoriteWorkouts from '../components/FavoriteWorkouts';

const Dashboard = () => {
	return (
		<div className="container">
			<h2>Dashboard page</h2>
			<div className="container my-1">
				<FavoriteWorkouts />
			</div>
		</div>
	);
};

export default Dashboard;
