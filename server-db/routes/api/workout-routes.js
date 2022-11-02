const router = require('express').Router();

const {
	getAllWorkout,
	getWorkoutById,
	createWorkout,
	updateWorkout,
	deleteWorkout,
} = require('../../controllers/workout-controller');

// /api/workouts
router.route('/').get(getAllWorkout).post(createWorkout);

// /api/workouts/:id
router
	.route('/:id')
	.get(getWorkoutById)
	.put(updateWorkout)
	.delete(deleteWorkout);

module.exports = router;
