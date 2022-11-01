// Import The GQL Tagged Templated function
const { gql } = require('apollo-server-express');

// create our TypeDefs
const typeDefs = gql`
	type User {
		_id: ID
		username: String
        email: String
        firstName: String
        lastName: String
		favWorkouts: [Workout]
		mondayWorkouts: [Workout]
		tuesdayWorkouts: [Workout]
		wednesdayWorkouts: [Workout]
		thursdayWorkouts: [Workout]
		fridayWorkouts: [Workout]
		saturdayWorkouts: [Workout]
		sundayWorkouts: [Workout]
	}

	type Workout {
		_id: ID
		workoutName: String
		workoutDescription: String
		setsCount: Int
		repsCount: Int
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		me: User
		users: [User]
		user(id: String): User
		workouts: [Workout]
		getWorkoutById(id: String): Workout
		getWorkoutByName(workoutName: String): Workout
	}

	type Mutation {
		login(username: String!, password: String!): Auth
		addUser(username: String!, password: String!): Auth
		addFavWorkout(favWorkoutId: String!): User
		deleteFavWorkout(favWorkoutId: String!): User
		scheduleWorkout(workoutDay: String!, favWorkoutId: String!): User
		removeScheduleWorkout(workoutDay: String!, favWorkoutId: String!): User
		createWorkout(
			workoutName: String!
			workoutDescription: String!
			setsCount: Int
			repsCount: Int
		): Workout
		updateWorkout(
			_id: ID!
			workoutName: String
			workoutDescription: String
			setsCount: Int
			repsCount: Int
		): Workout
		deleteWorkout(_id: ID!): Workout
	}
`;

module.exports = typeDefs;
