import { reducer } from '../utils/reducers';
import {
	UPDATE_WORKOUT_LOGS,
	UPDATE_WORKOUTS,
	ADD_TO_WORKOUT,
	ADD_MULTIPLE_TO_WORKOUT,
	REMOVE_FROM_WORKOUT,
	CLEAR_WORKOUTS,
} from '../utils/actions';

const initialState = {
	workoutLogs: [],
	Workout: [
		{
			_id: '1',
			workoutName: 'Push Ups',
			workoutDescription: 'Push Up',
			setsCount: 5,
			repsCount: 20,
		},
		{
			_id: '1',
			workoutName: 'Sit Ups',
			workoutDescription: 'Sit up',
			setsCount: 5,
			repsCount: 20,
		},
		{
			_id: '1',
			workoutName: 'Bench Press',
			workoutDescription: 'Bench Press',
			setsCount: 5,
			repsCount: 20,
		},
	],
	// cartOpen: false,
	// categories: [{ name: 'Food' }],
	// currentCategory: '1',
};

test('UPDATE_WORKOUTS', () => {
	let newState = reducer(initialState, {
		type: UPDATE_WORKOUTS,
		workoutLogs: [{}, {}],
	});

	expect(newState.workoutLogs.length).toBe(2);
	expect(initialState.workoutLogs.length).toBe(0);
});

test('ADD_TO_WORKOUT', () => {
	let newState = reducer(initialState, {
		type: ADD_TO_WORKOUT,
		Workout: { setsCount: 5, repsCount: 20 },
	});

	expect(newState.Workout.length).toBe(4);
	expect(initialState.Workout.length).toBe(3);
});

test('UPDATE_WORKOUT_LOGS', () => {
	let newState = reducer(initialState, {
		type: UPDATE_WORKOUT_LOGS,
		_id: '1',
		setsCount: 6,
	});

	expect(newState.Workout[0].setsCount).toBe(6);
	expect(newState.Workout[1].setsCount).toBe(6);
});

// test('REMOVE_FROM_CART', () => {
// 	let newState1 = reducer(initialState, {
// 		type: REMOVE_FROM_CART,
// 		_id: '1',
// 	});

// 	expect(newState1.cartOpen).toBe(true);
// 	expect(newState1.cart.length).toBe(1);
// 	expect(newState1.cart[0]._id).toBe('2');

// 	let newState2 = reducer(newState1, {
// 		type: REMOVE_FROM_CART,
// 		_id: '2',
// 	});

// 	expect(newState2.cartOpen).toBe(false);
// 	expect(newState2.cart.length).toBe(0);

// 	expect(initialState.cart.length).toBe(2);
// });

// test('ADD_MULTIPLE_TO_CART', () => {
// 	let newState = reducer(initialState, {
// 		type: ADD_MULTIPLE_TO_CART,
// 		products: [{}, {}],
// 	});

// 	expect(newState.cart.length).toBe(4);
// 	expect(initialState.cart.length).toBe(2);
// });

// test('UPDATE_CATEGORIES', () => {
// 	let newState = reducer(initialState, {
// 		type: UPDATE_CATEGORIES,
// 		categories: [{}, {}],
// 	});

// 	expect(newState.categories.length).toBe(2);
// 	expect(initialState.categories.length).toBe(1);
// });

// test('UPDATE_CURRENT_CATEGORY', () => {
// 	let newState = reducer(initialState, {
// 		type: UPDATE_CURRENT_CATEGORY,
// 		currentCategory: '2',
// 	});

// 	expect(newState.currentCategory).toBe('2');
// 	expect(initialState.currentCategory).toBe('1');
// });

// test('CLEAR_CART', () => {
// 	let newState = reducer(initialState, {
// 		type: CLEAR_CART,
// 	});

// 	expect(newState.cartOpen).toBe(false);
// 	expect(newState.cart.length).toBe(0);
// 	expect(initialState.cart.length).toBe(2);
// });

// test('TOGGLE_CART', () => {
// 	let newState = reducer(initialState, {
// 		type: TOGGLE_CART,
// 	});

// 	expect(newState.cartOpen).toBe(true);
// 	expect(initialState.cartOpen).toBe(false);

// 	let newState2 = reducer(newState, {
// 		type: TOGGLE_CART,
// 	});

// 	expect(newState2.cartOpen).toBe(false);
// });
