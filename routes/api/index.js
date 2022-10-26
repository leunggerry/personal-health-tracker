const router = require('express').Router();
const userRoutes = require('./user-routes');
const workoutRoutes = require('./workout-routes');
const dayRoutes = require('./day-routes');

router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);
router.use('/days', dayRoutes);

module.exports = router;