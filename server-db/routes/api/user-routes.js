const router = require('express').Router();

const {
	getAllUser,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
	scheduleWorkout,
	removeScheduledWorkout,
	deleteFavWorkout,
	addFavWorkout,
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getAllUser).post(createUser);

// /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:id/mondayWorkouts/:workoutId
// /api/users/:id/tuesdayWorkouts/:workoutId...
router
	.route('/:id/:workoutDay/:workoutId')
	.post(scheduleWorkout)
	.delete(removeScheduledWorkout);

// /api/users/:id/favWorkouts
router
	.route(':id/favWorkouts/:favWorkoutId')
	.post(addFavWorkout)
	.delete(deleteFavWorkout);

module.exports = router;
