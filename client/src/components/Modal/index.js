import React from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
} from '@chakra-ui/react';

import WorkoutList from '../WorkoutList';

function SizeExample() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [size, setSize] = React.useState('xl');

	const handleSizeClick = (newSize) => {
		setSize(newSize);
		onOpen();
	};

	return (
		<>
			<Button
				onClick={() => handleSizeClick(size)}
				m={4}
				colorScheme="blue"
			>{`+ Add Workout`}</Button>

			<Modal onClose={onClose} size={size} isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<WorkoutList />
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default SizeExample;
