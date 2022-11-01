export const getWorkoutIds = () => {
	const savedWorkoutsIds = localStorage.getItem('workouts')
		? JSON.parse(localStorage.getItem('workouts'))
		: [];

	return savedWorkoutsIds;
};

export const saveWorkoutIds = (workoutIdArr) => {
	if (workoutIdArr.length) {
		localStorage.setItem('workouts', JSON.stringify(workoutIdArr));
	} else {
		localStorage.removeItem('workouts');
	}
};

export const removeWorkoutIds = (workoutId) => {
	const savedWorkoutsIds = localStorage.getItem('workouts')
		? JSON.parse(localStorage.getItem('workouts'))
		: null;

	if (!savedWorkoutsIds) {
		return false;
	}

	const updatedSavedWorkoutsIds = savedWorkoutsIds?.filter(
		(savedWorkoutsId) => savedWorkoutsId !== workoutId
	);
	localStorage.setItem('workouts', JSON.stringify(updatedSavedWorkoutsIds));

	return true;
};
