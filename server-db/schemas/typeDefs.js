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
	}
`;

module.exports = typeDefs;
