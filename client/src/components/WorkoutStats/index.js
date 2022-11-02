import {
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
	StatGroup,
} from '@chakra-ui/react';

const WorkoutStats = () => {
	return (
		<StatGroup style={{ width: '25%'}}>
			<Stat>
				<StatLabel>Daily Jog</StatLabel>
				<StatNumber>4 km</StatNumber>
				<StatHelpText>
					<StatArrow type="increase" />
					23.36%
				</StatHelpText>
			</Stat>

			<Stat>
				<StatLabel>Ab Roll</StatLabel>
				<StatNumber>1 Set: 4Lap/Rep</StatNumber>
				<StatHelpText>
					<StatArrow type="decrease" />
					9.05%
				</StatHelpText>
			</Stat>
		</StatGroup>
	);
};

export default WorkoutStats;
