import { useReducer } from 'react';
import {
	UPDATE_FAVOIRITE_WORKOUTS,
	ADD_TO_WORKOUT,
	UPDATE_WORKOUT_QUANTITY,
	UPDATE_SET_QUANTITY,
	// =====================
	UPDATE_PRODUCTS,
	ADD_TO_CART,
	UPDATE_CART_QUANTITY,
	REMOVE_FROM_CART,
	ADD_MULTIPLE_TO_CART,
	UPDATE_CATEGORIES,
	UPDATE_CURRENT_CATEGORY,
	CLEAR_CART,
	TOGGLE_CART,
} from './actions';

export const reducer = (state, action) => {
	switch (action.type) {
		case UPDATE_FAVOIRITE_WORKOUTS:
			return {
				...state,
				favoriteWorkouts: [...action.favoriteWorkouts],
			};

		case ADD_TO_WORKOUT:
			return {
				...state,
				workouts: [...state.workouts, action.workouts],
			};

		case UPDATE_SET_QUANTITY:
			return {
				...state,
				workouts: state.workouts.map((workout) => {
					if (action._id === workout._id) {
						workout.setsCount = action.setsCount;
					}
					return workout;
				}),
			};

		case UPDATE_WORKOUT_QUANTITY:
			return {
				...state,
				workouts: state.workouts.map((workout) => {
					if (action._id === workout._id) {
						workout.setsCount = action.setsCount;
					}
					return workout;
				}),
			};
		// =====================
		case ADD_MULTIPLE_TO_CART:
			return {
				...state,
				cart: [...state.cart, ...action.products],
			};

		case REMOVE_FROM_CART:
			let newState = state.cart.filter((product) => {
				return product._id !== action._id;
			});

			return {
				...state,
				cartOpen: newState.length > 0,
				cart: newState,
			};

		case CLEAR_CART:
			return {
				...state,
				cartOpen: false,
				cart: [],
			};

		case TOGGLE_CART:
			return {
				...state,
				cartOpen: !state.cartOpen,
			};

		case UPDATE_CATEGORIES:
			return {
				...state,
				categories: [...action.categories],
			};

		case UPDATE_CURRENT_CATEGORY:
			return {
				...state,
				currentCategory: action.currentCategory,
			};

		default:
			return state;
	}
};

export function useProductReducer(initialState) {
	return useReducer(reducer, initialState);
}
