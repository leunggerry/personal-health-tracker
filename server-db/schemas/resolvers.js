const { User, Workout } = require('../models');
// Add Authentication Error handling
const { AuthenticationError } = require('apollo-server-express');
// Import the token info for session info
const { signToken } = require('../utils/auth');
const { use } = require('../routes/api/user-routes');

//workoutseeds
const workoutSeeds = require('../seeders/workout-seeds.json');

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
				.populate('favWorkouts')
				.select('-__v')
				.sort({ _id: -1 });
		},

		// get user session of dashboard that logged in
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = User.findOne({ _id: context.user._id })
					.select('-__v')
					.populate('favWorkouts')
					.populate('mondayWorkouts')
					.populate('tuesdayWorkouts')
					.populate('wednesdayWorkouts')
					.populate('thursdayWorkouts')
					.populate('fridayWorkouts')
					.populate('saturdayWorkouts')
					.populate('sundayWorkouts');
				return userData;
			}

			throw new AuthenticationError('Not Logged In');
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
	Mutation: {
		/******************************************************
		 * !!! User Mutations
		 ******************************************************/
		addUser: async (parent, args) => {
			// create user entry in db
			const user = await User.create(args);

			// add default workouts as Favourite
			const workoutData = await Workout.find({}).select('_id');
			console.log(workoutData);
			const userWorkouts = await User.findOneAndUpdate(
				{ _id: user._id },
				{ $push: { favWorkouts: workoutData } },
				{ new: true }
			);

			// console.log(userWorkouts);
			// create session token
			const token = signToken(user);

			return { token, user };
		},
		login: async (parent, { username, password }) => {
			const user = await User.findOne({ username });

			// no user in the DB
			if (!user) {
				throw new AuthenticationError('Incorrect Credentials');
			}

			const correctPassword = await user.isCorrectPassword(password);
			if (!correctPassword) {
				throw new AuthenticationError('Incorrect passowrd');
			}

			// create user session token with JWT
			const token = signToken(user);
			return { token, user };
		},

		// add favourite workout
		addFavWorkout: async (parent, args, context) => {
			// check if the user is logged in
			if (context.user) {
				const updatedUser = await User.findOneAndUpdate(
					{ _id: context.user._id },
					{ $push: { favWorkouts: args.favWorkoutId } },
					{ new: true }
				);

				//console.log(updatedUser);

				// return the updated user
				return updatedUser;
			}

			//no user has logged in
			throw new AuthenticationError('You need to logged in!');
		},

		// delete favourite workout
		deleteFavWorkout: async (parent, args, context) => {
			// check if the user is logged in
			if (context.user) {
				const updatedUser = await User.findOneAndUpdate(
					{ _id: context.user._id },
					{ $pull: { favWorkouts: args.favWorkoutId } },
					{ new: true }
				);

				//console.log(updatedUser);

				// return the updated user
				return updatedUser;
			}

			//no user has logged in
			throw new AuthenticationError('You need to be logged in!');
		},

		// add workout to schedule
		scheduleWorkout: async (parent, args, context) => {
			// check if the user is logged in
			if (context.user) {
				const updatedUser = await User.findOneAndUpdate(
					{ _id: context.user._id },
					{ $push: { [args.workoutDay]: args.favWorkoutId } },
					{ new: true }
				);

				//console.log(updatedUser);

				// return the updated user
				return updatedUser;
			}

			//no user has logged in
			throw new AuthenticationError('You need to be logged in!');
		},
		// remove workout from schedule
		removeScheduleWorkout: async (parent, args, context) => {
			// check if the user is logged in
			if (context.user) {
				const updatedUser = await User.findOneAndUpdate(
					{ _id: context.user._id },
					{ $pull: { [args.workoutDay]: args.favWorkoutId } },
					{ new: true }
				);

				console.log(updatedUser);

				//return the updated user
				return updatedUser;
			}
			//no user has logged in
			throw new AuthenticationError('You need to be logged in!');
		},
		/******************************************************
		 * !!! Workout Mutations
		 ******************************************************/
		createWorkout: async (parent, args, context) => {
			// check if the user is logged in to create workout
			if (context.user) {
				const workout = await Workout.create(args);

				return workout;
			}
			//no user has logged in
			throw new AuthenticationError(
				'You need to be logged in to add a workout!'
			);
		},

		//update the workout exercise
		updateWorkout: async (parent, args, context) => {
			if (context.user) {
				// const update = {
				// 	workoutName: args.workoutName,
				// 	workoutDescription: args.workoutDescription,
				// 	setsCount: args.setsCount,
				// 	repsCount: args.repsCount,
				//};
				// console.log(args._id);
				// console.log(update);

				const workout = await Workout.findOneAndUpdate(
					{ _id: args._id },
					{
						workoutName: args.workoutName,
						workoutDescription: args.workoutDescription,
						setsCount: args.setsCount,
						repsCount: args.repsCount,
					},
					{ new: true }
				);

				// console.log(workout);
				return workout;
			}

			throw new AuthenticationError(
				'You need to be logged in to update a workout!'
			);
		},

		// Delete Workout based on ID
		deleteWorkout: async (parent, args, context) => {
			//user logged in can only delete
			if (context.user) {
				const deletedWorkout = await Workout.findOneAndDelete({
					_id: args._id,
				});

				return deletedWorkout;
			}

			throw new AuthenticationError(
				'You need to be logged in to delete a workout!'
			);
		},
	},
};

module.exports = resolvers;
