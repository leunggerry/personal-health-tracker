// Import The GQL Tagged Templated function
const { gql } = require('apollo-server-express');

// create our TypeDefs
const typeDefs = gql`
	type User {
		_id: ID
		username: String
		favWorkouts: [Workout]
		mondayWorkouts: [Workout]
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

	type Query {
		users: [User]
		user(id: String): User
		workouts: [Workout]
		getWorkoutById(id: String): Workout
	}
`;

module.exports = typeDefs;
