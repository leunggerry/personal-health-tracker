import React from 'react';
import Paper from '@mui/material/Paper';
import {
	Scheduler,
	WeekView,
	Appointments,
	AppointmentTooltip,
	AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';

import moment from 'moment';

// import { appointments } from '../../../demo-data/month-appointments';

// import FavoriteWorkouts from '../components/FavoriteWorkouts';

function Dashboard() {
	const currentDate = moment();

	// This is a placeholder
	const appointments = [
		{ title: 'Mail New Leads for Follow Up', startDate: currentDate },
		// {
		// 	title: 'Product Meeting',
		// 	startDate: '2019-06-23T10:30',
		// 	endDate: '2019-06-23T11:30',
		// },
		// { title: 'Send Territory Sales Breakdown', startDate: '2019-06-23T12:35' },
	];

	return (
		<div className="container">
			<h2>Dashboard page</h2>
			<div className="container my-1">
				{/* <FavoriteWorkouts /> */}
				<Paper>
					<Scheduler data={appointments}>
						{/* <ViewState currentDate={currentDate} /> */}
						<WeekView startDayHour={9} endDayHour={19} />
						<Appointments />
					</Scheduler>
				</Paper>
			</div>
		</div>
	);
}

export default Dashboard;
