/**
 * Components to add
 *  - Favories (favorited workouts)
 *  - Calendar
 */
import React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
	Scheduler,
	DayView,
	WeekView,
	Appointments,
	AppointmentTooltip,
	AppointmentForm,
	Toolbar,
	ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';
import moment from 'moment';

import ProductItem from '../components/ProductItem';

// import appointments from '../../../demo-data/today-appointments';

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

export default class Dashboard extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			data: appointments,
		};
	}

	render() {
		const { data } = this.state;

		return (
			<div className="container">
				<h2>Dashboard page</h2>
				<div className="container my-1">
					{/* <FavoriteWorkouts /> */}
					<Paper>
						<Scheduler data={data} height={660}>
							<ViewState
								defaultCurrentDate={currentDate}
								defaultCurrentViewName="Week"
							/>
							<DayView startDayHour={9} endDayHour={23} />
							<WeekView startDayHour={9} endDayHour={23} />
							<Toolbar />
							<ViewSwitcher />
							<Appointments />
							{/* <AppointmentTooltip showCloseButton showOpenButton /> */}
							<AppointmentForm readOnly />
						</Scheduler>
					</Paper>
				</div>
			</div>
		);
	}
}
