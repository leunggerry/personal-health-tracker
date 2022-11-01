import { gql } from '@apollo/client';

/**
 * @description Login Mutations
 */
export const LOGIN = gql`
	mutation Login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			token
			user {
				_id
				username
				email
				firstName
				lastName
			}
		}
	}
`;

/**
 * @description Add a new User
 */
export const ADD_USER = gql`
	mutation AddUser(
		$username: String!
		$email: String!
		$firstName: String!
		$lastName: String!
		$password: String!
	) {
		addUser(
			username: $username
			email: $email
			firstName: $firstName
			lastName: $lastName
			password: $password
		) {
			token
			user {
				_id
				username
				email
				firstName
				lastName
			}
		}
	}
`;

/**************************************************************/
// Workout Mutations
/**
 * @description Add a workout from favourites
 */
export const ADD_FAV_WORKOUT = gql`
	mutation AddFavWorkout($favWorkoutId: String!) {
		addFavWorkout(favWorkoutId: $favWorkoutId) {
			_id
			username
			favWorkouts {
				_id
				workoutName
				workoutDescription
				setsCount
				repsCount
			}
		}
	}
`;

/**
 * @description Delete a workout from favourites
 */
export const DELETE_FAV_WORKOUT = gql`
	mutation DeleteFavWorkout($favWorkoutId: String!) {
		deleteFavWorkout(favWorkoutId: $favWorkoutId) {
			_id
			username
			favWorkouts {
				workoutName
				_id
				workoutDescription
				setsCount
			}
		}
	}
`;

/**
 * @description Schedule a workout on a day
 */
export const SCHEDULE_WORKOUT = gql`
	mutation ScheduleWorkout($workoutDay: String!, $favWorkoutId: $String!) {
		scheduleWorkout(workoutDay: $workoutDay, favWorkoutId: $favWorkoutId) {
			_id
			username
			mondayWorkouts {
				_id
				workoutName
				workoutDescription
				setsCount
				repsCount
			}
			tuesdayWorkouts {
				_id
				workoutName
				workoutDescription
				setsCount
				repsCount
			}
			wednesdayWorkouts {
				_id
				workoutName
				workoutDescription
				setsCount
				repsCount
			}
			thursdayWorkouts {
				_id
				workoutName
				workoutDescription
				setsCount
				repsCount
			}
			fridayWorkouts {
				_id
				workoutName
				workoutDescription
				setsCount
				repsCount
			}
			saturdayWorkouts {
				_id
				workoutName
				workoutDescription
				setsCount
				repsCount
			}
			sundayWorkouts {
				_id
				workoutName
				workoutDescription
				setsCount
				repsCount
			}
		}
	}
`;

/**
 * @description Schedule a workout on a day
 */
export const REMOVE_SCHEDULE_WORKOUT = gql`
	mutation RemoveScheduleWorkout($workoutDay: String!, $favWorkoutId: $String!) {
		removeScheduleWorkout(workoutDay: $workoutDay, favWorkoutId: $favWorkoutId) {
			_id
			username
			mondayWorkouts {
				_id
				workoutName
				workoutDescription
				setsCount
				repsCount
			}
			tuesdayWorkouts {
				_id
				workoutName
				workoutDescription
				setsCount
				repsCount
			}
			wednesdayWorkouts {
				_id
				workoutName
				workoutDescription
				setsCount
				repsCount
			}
			thursdayWorkouts {
				_id
				workoutName
				workoutDescription
				setsCount
				repsCount
			}
			fridayWorkouts {
				_id
				workoutName
				workoutDescription
				setsCount
				repsCount
			}
			saturdayWorkouts {
				_id
				workoutName
				workoutDescription
				setsCount
				repsCount
			}
			sundayWorkouts {
				_id
				workoutName
				workoutDescription
				setsCount
				repsCount
			}
		}
 	}
`;

///Deprecated mutations
// @todo remove
/**************************************************************/
export const ADD_ORDER = gql`
	mutation addOrder($products: [ID]!) {
		addOrder(products: $products) {
			purchaseDate
			products {
				_id
				name
				description
				price
				quantity
				category {
					name
				}
			}
		}
	}
`;
