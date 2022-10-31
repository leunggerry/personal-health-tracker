<Container fluid className="workout-summary">
	<Row>
		{/* Workout Summary */}
		<Col xs={12} md={8}>
			<Heading as="h4" size="md">
				Session Summary
			</Heading>
		</Col>
		<Col xs={12} md={8}>
			<Heading as="h5" size="sm">
				Monday
			</Heading>
		</Col>
		{/* Workout Logs */}
		<Col xs={12} md={8}>
			<div className="workout-session">Sesson 1</div>
			<Row>
				<Col xs={12} md={8}>
					<Col xs={6} md={4}>
						<Row>
							<Col xs={4}>
								<img alt="" src="/images/icons/stopwatch.png" />
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
							{/* <Col xs={4}>
									<div>ICON</div>
								</Col> */}
							<Col xs={8}>
								<div>Actual Workout</div>
								<div>
									<span>00:03:35</span>
								</div>
							</Col>
						</Row>
					</Col>

					{/* <Col xs={6} md={4}>
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
						</Col> */}

					<Col xs={6} md={4}>
						<Row>
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
								<img alt="" src="/images/icons/dumbbell.png" />
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
								<img alt="" src="/images/icons/weight.png" />
							</Col>
							<Col xs={8}>
								<div>Weight Lifted</div>
								<div>
									<span>0 Ibs</span>
								</div>
							</Col>
						</Row>
					</Col>
				</Col>

				<Col className="workout-logs-container" xs={12} md={8}>
					<div className="workout-logs-header">
						<strong>Workouts Logs</strong>
					</div>
					<WorkoutTable />
				</Col>
			</Row>
		</Col>
	</Row>
</Container>;
