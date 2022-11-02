import {
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
	StatGroup,
	Flex,
	Divider,
	Box,
} from '@chakra-ui/react';

const WorkoutStats = () => {
	return (
		<StatGroup style={{ width: '25%' }}>
			<Flex align="center" mx="2">
				<Box mx="4">
					<Stat>
						<StatLabel mb="2">Daily Jog</StatLabel>
						<StatNumber>4 km</StatNumber>
						<StatHelpText>
							<StatArrow type="increase" />
							23.36%
						</StatHelpText>
					</Stat>
				</Box>
			</Flex>

			<Divider orientation="horizontal" borderColor="gray.300" my="2"></Divider>

			<Flex align="center" mx="2">
				<Box mx="4">
					<Stat>
						<StatLabel mb="2">Ab Roll</StatLabel>
						<StatNumber>1 Set: 4Lap/Rep</StatNumber>
						<StatHelpText>
							<StatArrow type="decrease" />
							9.05%
						</StatHelpText>
					</Stat>
				</Box>
			</Flex>

			<Divider orientation="horizontal" borderColor="gray.300" my="2"></Divider>

			<Flex align="center" mx="2">
				<Box mx="4">
					<Stat>
						<StatLabel mb="2">Band Back Fly</StatLabel>
						<StatNumber>5 Set: 10Lap/Rep</StatNumber>
						<StatHelpText>
							<StatArrow type="increase" />
							60%
						</StatHelpText>
					</Stat>
				</Box>
			</Flex>
		</StatGroup>
	);
};

export default WorkoutStats;
