import React, { useEffect } from 'react';
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from '@chakra-ui/react';
import Button from 'react-bootstrap/Button';

import Modal from '../Modal';
import WorkoutList from '../WorkoutList';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_WORKOUTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

function StripedColumnsExample() {
	return (
		<TableContainer>
			<Table variant="simple">
				<TableCaption>
					<Modal />
				</TableCaption>
				<Thead>
					<Tr>
						<Th>Exercise Name</Th>
						<Th>Lifting Logs</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						{/* <Td>
							<WorkoutList />
						</Td> */}
						<Td>Push ups</Td>
						<Td>
							<div>Set 1 : 4 Lap/Rep</div>
							<br />
							<div>Set 2 : 4 Lap/Rep</div>
							<br />
							<div>Set 3 : 4 Lap/Rep</div>
						</Td>
					</Tr>
					<Tr>
						<Td>Ab Roll</Td>
						<Td>
							<div>Set 1 : 4 Lap/Rep</div>
						</Td>
					</Tr>
					<Tr>
						<Td>Band Back Fly</Td>
						<Td>
							<div>Set 1 : 4 Lap/Rep</div>
						</Td>
					</Tr>
				</Tbody>
			</Table>
		</TableContainer>
	);
}

export default StripedColumnsExample;
