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

// User's Favourite workouts utilities
export const getFavWorkoutIds = () => {
	const savedWorkoutIds = localStorage.getItem('workouts')
		? JSON.parse(localStorage.getItem('workouts'))
		: [];

	return savedWorkoutIds;
};

export const saveFavWorkoutIds = (workoutIdArr) => {
	if (workoutIdArr.length) {
		localStorage.setItem('workouts', JSON.stringify(workoutIdArr));
	} else {
		localStorage.removeItem('workouts');
	}
};

export const removeFavWorkoutId = (workoutId) => {
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
