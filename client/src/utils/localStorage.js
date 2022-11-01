export const getWorkoutIds = () => {
	const savedWorkoutIds = localStorage.getItem('workouts')
		? JSON.parse(localStorage.getItem('workouts'))
		: [];

	return savedWorkoutIds;
};

export const saveWorkoutIds = (workoutIdArr) => {
	if (workoutIdArr.length) {
		localStorage.setItem('workouts', JSON.stringify(workoutIdArr));
	} else {
		localStorage.removeItem('workouts');
	}
};

export const removeWorkoutId = (workoutId) => {
	const savedWorkoutIds = localStorage.getItem('workouts')
		? JSON.parse(localStorage.getItem('workouts'))
		: null;

	if (!savedWorkoutIds) {
		return false;
	}

	const updatedWorkoutIds = savedWorkoutIds?.filter(
		(savedWorkoutId) => savedWorkoutId !== workoutId
	);
	localStorage.setItem('workouts', JSON.stringify(updatedWorkoutIds));

	return true;
};
