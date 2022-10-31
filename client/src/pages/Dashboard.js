/**
 * Components to add
 *  - Favories (favorited workouts)
 *  - Calendar
 */
import React from 'react';
import {
	Heading,
	Grid,
	GridItem,
	Container,
	Wrap,
	WrapItem,
	Center,
	VStack,
	Box,
} from '@chakra-ui/react';
import FavoriteWorkouts from '../components/FavoriteWorkouts';
import WorkoutTable from '../components/WorkoutTable';
import WorkoutStats from '../components/WorkoutStats';

const Dashboard = () => {
	return (
		<Grid
			className="Dashboard"
			h="200px"
			templateRows="repeat(2, 1fr)"
			templateColumns="repeat(5, 1fr)"
			gap={4}
		>
			{/* TODO: remove bg="tomato" */}
			<GridItem rowSpan={2} colSpan={1} bg="tomato">
				<FavoriteWorkouts />
			</GridItem>
			{/* TODO: remove bg="papayawhip" */}
			<GridItem colSpan={2} bg="papayawhip">
				<WorkoutStats />
			</GridItem>

			{/* Workout Summary */}
			{/* TODO: remove bg="papayawhip" */}
			<GridItem colSpan={2} bg="papayawhip">
				<Heading as="h4" size="md">
					Session Summary
				</Heading>
				<Heading as="h5" size="sm">
					Monday
				</Heading>
				<div className="workout-session">Sesson 1</div>

				<Wrap justify="center">
					{/* Session Length */}
					<WrapItem>
						<Center w={[55, 180, 200]} h="80px">
							<img alt="" src="/images/icons/stopwatch.png" />
							<VStack spacing={1} align="stretch">
								<div>Session Length</div>
								<div>
									<span>00:03:35</span>
								</div>
							</VStack>
						</Center>
					</WrapItem>

					{/*  Actual Workout */}
					<WrapItem>
						<Center w={[55, 180, 200]} h="80px">
							<VStack spacing={1} align="stretch">
								<div>Actual Workout</div>
								<div>
									<span>00:03:35</span>
								</div>
							</VStack>
						</Center>
					</WrapItem>

					{/*  Rest Timer */}
					<WrapItem>
						<Center w={[55, 180, 200]} h="80px">
							<VStack spacing={1} align="stretch">
								<div>Rest Timer</div>
								<div>
									<span>00:03:00</span>
								</div>
							</VStack>
						</Center>
					</WrapItem>
					<WrapItem>
						<Center w={[55, 180, 200]} h="80px">
							<img alt="" src="/images/icons/weight.png" />
							<VStack spacing={1} align="stretch">
								<div>Weight Lifted</div>
								<div>
									<span>0 Ibs</span>
								</div>
							</VStack>
						</Center>
					</WrapItem>
				</Wrap>
			</GridItem>

			{/* Workout Logs */}
			<GridItem colSpan={4}>
				<div className="workout-logs-header">
					<strong>Workouts Logs</strong>
				</div>
				<WorkoutTable />
			</GridItem>
		</Grid>
	);
};

export default Dashboard;
