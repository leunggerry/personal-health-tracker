import { gql } from '@apollo/client';

/*********************************************************/
/** Queries for Users */
/**
 * @description get the user that logged in
 */
export const QUERY_ME = gql`
	{
		me {
			_id
			username
			firstName
			lastName
			email
			favWorkouts {
				_id
				workoutName
				workoutDescription
				setsCount
				repsCount
			}
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
 * @description Get all the user
 */
export const QUERY_USERS = gql`
	query getAllUsers {
		users {
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
 * @description getUser by id
 */
export const QUERY_USER = gql`
	query getUser($userId: String!) {
		user(id: $userId) {
			_id
			username
			favWorkouts {
				_id
				workoutName
				workoutDescription
				setsCount
				repsCount
			}
			mondayWorkouts {
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
/** Queries for Workouts */
/**
 * @description Get All Workouts
 */
export const QUERY_ALL_WORKOUTS = gql`
	query getAllWorkouts {
		workouts {
			_id
			workoutName
			workoutDescription
			setsCount
			repsCount
		}
	}
`;

/**
 * @description Get Workout by Name
 */
export const QUERY_WORKOUT_BY_NAME = gql`
	query getWorkoutByName($workoutName: String!) {
		getWorkoutByName(workoutName: $workoutName) {
			_id
			workoutName
			workoutDescription
			setsCount
			repsCount
		}
	}
`;

/**
 * @description Get Workout by ID
 */
export const QUERY_WORKOUT_BY_ID = gql`
	query getWorkoutByID($workoutId: String!) {
		getWorkoutByName(workoutName: $workoutName) {
			_id
			workoutName
			workoutDescription
			setsCount
			repsCount
		}
	}
`;

/*********************************************************/
export const QUERY_PRODUCTS = gql`
	query getProducts($category: ID) {
		products(category: $category) {
			_id
			name
			description
			price
			quantity
			image
			category {
				_id
			}
		}
	}
`;

export const QUERY_CHECKOUT = gql`
	query getCheckout($products: [ID]!) {
		checkout(products: $products) {
			session
		}
	}
`;

export const QUERY_ALL_PRODUCTS = gql`
	{
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
`;

export const QUERY_CATEGORIES = gql`
	{
		categories {
			_id
			name
		}
	}
`;

// export const QUERY_USER = gql`
// 	{
// 		user {
// 			firstName
// 			lastName
// 			orders {
// 				_id
// 				purchaseDate
// 				products {
// 					_id
// 					name
// 					description
// 					price
// 					quantity
// 					image
// 				}
// 			}
// 		}
// 	}
// `;
