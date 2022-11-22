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
	Container,
} from '@chakra-ui/react';
import FavoriteWorkouts from '../components/FavoriteWorkouts';
import WorkoutTable from '../components/WorkoutTable';
import WorkoutStats from '../components/WorkoutStats';
import Auth from '../utils/auth';

const Dashboard = () => {
	return (
		// <Container >
		Auth.loggedIn() ? (
			<Grid
				h="200px"
				templateRows="repeat(2, 1fr)"
				templateColumns="repeat(5, 1fr)"
				gap={4}
				display="flex"
				flexDirection="column"
				justifyContent="center"
				className="main"
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
				<GridItem
					colSpan={2}
					boxShadow="dark-lg"
					p="6"
					rounded="md"
					bg="white"
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
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
						<strong>Workout Logs</strong>
					</div>
					<WorkoutTable />
				</GridItem>
			</Grid>
		) : (
			// </Container>
			<h3>
				<span role="img" aria-label="shocked">
					😱
				</span>
				Oops, Sign up or Login to view this page!
			</h3>
		)
	);
};

export default Dashboard;
