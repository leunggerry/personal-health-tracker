/**
 * Components to add
 *  - Favories (favorited workouts)
 *  - Calendar
 */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
	Scheduler,
	MonthView,
	Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import moment from 'moment';

// import { appointments } from '../../../demo-data/month-appointments';

// import FavoriteWorkouts from '../components/FavoriteWorkouts';

const Dashboard = () => {
	const currentDate = moment();
	// const currentDate = '2018-07-17';

	// This is a placeholder
	const schedulerData = [
		{
			startDate: currentDate,
			endDate: '2022-11-01T11:00',
			title: 'Meeting',
		},
		{
			startDate: currentDate,
			endDate: '2022-11-01T13:30',
			title: 'Go to a gym',
		},
	];

	return (
		<div className="container">
			<h2>Dashboard page</h2>
			<div className="container my-1">
				{/* <FavoriteWorkouts /> */}
				<Paper>
					<Scheduler data={schedulerData}>
						<ViewState currentDate={currentDate} />
						<MonthView />
						<Appointments />
					</Scheduler>
				</Paper>
			</div>
		</div>
	);
};

export default Dashboard;
