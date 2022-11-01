import { reducer } from '../utils/reducers';
import {
	UPDATE_FAVOIRITE_WORKOUTS,
	ADD_TO_WORKOUT,
	REMOVE_FROM_FAVORITES,
	CLEAR_FAVORITES,
	UPDATE_WORKOUT_QUANTITY,
	UPDATE_SET_QUANTITY,
	UPDATE_REP_QUANTITY,
} from '../utils/actions';

const initialState = {
	favoriteWorkouts: [],
	workouts: [
		{
			_id: '1',
			workoutName: 'Push Ups',
			workoutDescription: 'Push Up',
			setsCount: 5,
			repsCount: 20,
		},
		{
			_id: '2',
			workoutName: 'Sit Ups',
			workoutDescription: 'Sit up',
			setsCount: 5,
			repsCount: 20,
		},
		{
			_id: '3',
			workoutName: 'Bench Press',
			workoutDescription: 'Bench Press',
			setsCount: 5,
			repsCount: 20,
		},
	],
};

test('UPDATE_FAVOIRITE_WORKOUTS', () => {
	let newState = reducer(initialState, {
		type: UPDATE_FAVOIRITE_WORKOUTS,
		favoriteWorkouts: [{}, {}],
	});

	expect(newState.favoriteWorkouts.length).toBe(2);
	expect(initialState.favoriteWorkouts.length).toBe(0);
});

test('ADD_TO_WORKOUT', () => {
	let newState = reducer(initialState, {
		type: ADD_TO_WORKOUT,
		workouts: { quantity: 1 },
	});

	expect(newState.workouts.length).toBe(4);
	expect(initialState.workouts.length).toBe(3);
});

test('UPDATE_WORKOUT_QUANTITY', () => {
	let newState = reducer(initialState, {
		type: UPDATE_WORKOUT_QUANTITY,
		_id: '1',
		setsCount: 7,
		repsCount: 40,
	});

	expect(newState.workouts[0].setsCount).toBe(7);
	expect(newState.workouts[0].repsCount).toBe(40);

	expect(newState.workouts[1].setsCount).toBe(5);
	expect(newState.workouts[1].repsCount).toBe(20);
});

// test('UPDATE_SET_QUANTITY', () => {
// 	let newState = reducer(initialState, {
// 		type: UPDATE_SET_QUANTITY,
// 		_id: '1',
// 		setsCount: 7,
// 	});

// 	expect(newState.workouts[0].setsCount).toBe(7);
// 	expect(newState.workouts[1].setsCount).toBe(5);
// });

// test('ADD_TO_CART', () => {
// 	let newState = reducer(initialState, {
// 		type: ADD_TO_CART,
// 		product: { purchaseQuantity: 1 },
// 	});

// 	expect(newState.cart.length).toBe(3);
// 	expect(initialState.cart.length).toBe(2);
// });

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
