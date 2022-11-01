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
	Wrap,
	WrapItem,
	Center,
	VStack,
} from '@chakra-ui/react';
import FavoriteWorkouts from '../components/FavoriteWorkouts';
// import FavoritesDrawer from '../components/Drawer';
import WorkoutTable from '../components/WorkoutTable';
import WorkoutStats from '../components/WorkoutStats';

const Dashboard = () => {
	
	return (
		<Grid
			className="main"
			h="200px"
			templateRows="repeat(2, 1fr)"
			templateColumns="repeat(5, 1fr)"
			gap={4}
		>
			<GridItem
				rowSpan={2}
				colSpan={1}
				boxShadow="dark-lg"
				p="6"
				rounded="md"
				bg="white"
			>
				<FavoriteWorkouts />
				{/* <FavoritesDrawer /> */}
			</GridItem>
			<GridItem colSpan={2} boxShadow="dark-lg" p="6" rounded="md" bg="white">
				<WorkoutStats />
			</GridItem>

			{/* Workout Summary */}
			<GridItem colSpan={2} boxShadow="dark-lg" p="6" rounded="md" bg="white">
				<Heading as="h4" size="md">
					Session Summary
				</Heading>
				<Heading as="h5" size="sm">
					Monday
				</Heading>
				<div className="workout-session">
					<span>Session 1</span>
					<Wrap justify="center">
						{/* Session Length */}
						<WrapItem boxShadow="xl" p="6" rounded="md" bg="#f6f5f5ff">
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
						<WrapItem boxShadow="xl" p="6" rounded="md" bg="#f6f5f5ff">
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
						<WrapItem boxShadow="xl" p="6" rounded="md" bg="#f6f5f5ff">
							<Center w={[55, 180, 200]} h="80px">
								<VStack spacing={1} align="stretch">
									<div>Rest Timer</div>
									<div>
										<span>00:03:00</span>
									</div>
								</VStack>
							</Center>
						</WrapItem>
						<WrapItem boxShadow="xl" p="6" rounded="md" bg="#f6f5f5ff">
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
				</div>
			</GridItem>

			{/* Workout Logs */}
			<GridItem colSpan={4} boxShadow="dark-lg" p="6" rounded="md" bg="white">
				<div className="workout-logs-header">
					<strong>Workouts Logs</strong>
				</div>
				<WorkoutTable />
			</GridItem>
		</Grid>
	);
};

export default Dashboard;
