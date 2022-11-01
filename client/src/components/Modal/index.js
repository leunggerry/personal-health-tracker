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

			<Modal onClose={onClose} size={size} isOpen={isOpen} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader style={{backgroundColor:'grey'}}>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<strong>WORKOUTS</strong>
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
