/**
 * Components to add
 *  - Favories (favorited workouts)
 *  - Calendar
 */
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import FavoriteWorkouts from '../components/FavoriteWorkouts';

const Dashboard = () => {
	return (
		// <div className="container">
		// 	<h2>Dashboard page</h2>
		// 	<div className="container my-1">
		// 		<FavoriteWorkouts />
		// 	</div>
		// </div>

		<Container fluid className="workout-summary">
			<Row>
				{/* Workout Summary */}
				<Col xs={12} md={8}>
					<h3>Session Summary</h3>
				</Col>
				<Col xs={12} md={8}>
					<strong>Monday</strong>
				</Col>
				{/* Workout Logs */}
				<Col xs={12} md={8}>
					<div className="workout-session">Sesson 1</div>
					<Row>
						<Col xs={6} md={4}>
							<Row>
								<Col xs={4}>
									<div>ICON</div>
								</Col>
								<Col xs={8}>
									<div>Session Length</div>
									<div>
										<span>00:03:35</span>
									</div>
								</Col>
							</Row>
						</Col>

						<Col xs={6} md={4}>
							<Row>
								<Col xs={4}>
									<div>ICON</div>
								</Col>
								<Col xs={8}>
									<div>Actual Workout</div>
									<div>
										<span>00:03:35</span>
									</div>
								</Col>
							</Row>
						</Col>

						<Col xs={6} md={4}>
							<Row>
								<Col xs={4}>
									<div>ICON</div>
								</Col>
								<Col xs={8}>
									<div>Wasted Time</div>
									<div>
										<span>00:00:00</span>
									</div>
								</Col>
							</Row>
						</Col>

						<Col xs={6} md={4}>
							<Row>
								<Col xs={4}>
									<div>ICON</div>
								</Col>
								<Col xs={8}>
									<div>Rest Timer</div>
									<div>
										<span>00:03:00</span>
									</div>
								</Col>
							</Row>
						</Col>

						<Col xs={6} md={4}>
							<Row>
								<Col xs={4}>
									<div>ICON</div>
								</Col>
								<Col xs={8}>
									<div>Exercises Done</div>
									<div>
										<span>2</span>
									</div>
								</Col>
							</Row>
						</Col>

						<Col xs={6} md={4}>
							<Row>
								<Col xs={4}>
									<div>ICON</div>
								</Col>
								<Col xs={8}>
									<div>Weight Lifted</div>
									<div>
										<span>0 Ibs</span>
									</div>
								</Col>
							</Row>
						</Col>

						<Col className="workout-logs-container">
							<div className="workout-logs-header">
								<strong>Workouts Logs</strong>
							</div>

							{/* Headings */}
							<div className="exercise-name-headers">
								<div className="E-name">Exercise Name</div>
								<div className="E-log">Lifting Logs</div>
							</div>

							{/* Exercises */}
							<div className="exercise-container">
								<div className="exercise-block"></div>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>

			{/* <Row>
				<Col>
					<h4>Workouts Logs</h4>
				</Col>
			</Row> */}
			<Row>
				<Col>
					<Button variant="primary">+ Add Workout</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
