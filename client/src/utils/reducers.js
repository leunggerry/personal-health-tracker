import { useReducer } from 'react';
import {
	UPDATE_WORKOUT_LIST,
	ADD_TO_FAVORITES,
	UPDATE_FAVORITES,
	REMOVE_FROM_FAVORITE,
	// ADD_TO_DAY,
} from './actions';

// import { getDay } from './helpers';

export const reducer = (state, action) => {
	switch (action.type) {
		// if action type value is the value of `UPDATE_WORKOUT_LIST`, return a new state object with an updated dbWorkouts array
		case UPDATE_WORKOUT_LIST:
			// return a new object with a copy of the state
			return {
				...state,
				// set the dbWorkouts key to a value of a new array with the action.dbWorkouts value spread across it
				dbWorkouts: [...action.dbWorkouts],
			};

		case ADD_TO_FAVORITES:
			return {
				...state,
				favoriteWorkouts: [...state.favoriteWorkouts, action.dbWorkouts],
			};

		// if action type value is the value of `UPDATE_FAVORITES`, return a new state object with an updated favorites array
		case UPDATE_FAVORITES:
			return {
				...state,
				favoriteWorkouts: action.favoriteWorkouts,
			};

		case REMOVE_FROM_FAVORITE:
			let newState = state.favoriteWorkouts.filter((workout) => {
				return workout._id !== action._id;
			});

			return {
				...state,
				favoriteWorkouts: newState,
			};

		// case ADD_TO_DAY:
		// 	return {
		// 		...state,
		// 		daily: [...state.daily, action.favoriteWorkouts],
		// 	};

		// if it's none of these actions, do not update state at all and keep things the same!
		default:
			return state;
	}
};

export function useProductReducer(initialState) {
	return useReducer(reducer, initialState);
}
