const { User, Workout } = require('../models');

const resolvers = {
	Query: {
		/******************************************************
		 * !!! User Queries
		 ******************************************************/
		/**
		 *
		 * @returns
		 */
		users: async () => {
			return User.find({})
				.populate({
					path: 'favWorkouts',
					select: '-__v',
				})
				.select('-__v')
				.sort({ _id: -1 });
		},

		//get a user by ID
		user: async (parent, { id }) => {
			// setup params to include ID outhers return all users
			return User.findById(id)
				.populate({
					path: 'favWorkouts',
					select: '-__v',
				})
				.select('-__v')
				.sort({ _id: -1 });
		},

		/******************************************************
		 * !!! Workout Queries
		 ******************************************************/
		//get all workouts
		workouts: async () => {
			return Workout.find({}).sort({ _id: -1 });
		},

		getWorkoutById: async (parent, { id }) => {
			//console.log(workoutName);
			const params = id ? { id } : {};
			console.log(params);
			return Workout.findById(id).select('-__v');
		},
		getWorkoutByName: async (parent, { workoutName }) => {
			//console.log(workoutName);
			return Workout.findOne({ workoutName }).select('-__v');
		},
	},
};

module.exports = resolvers;
