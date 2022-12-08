import { reducer } from '../utils/reducers';
import {
	UPDATE_WORKOUT_LIST,
	UPDATE_FAVORITES,
	ADD_TO_FAVORITES,
	REMOVE_FROM_FAVORITE,
} from '../utils/actions';

// create a sample of what our global state will look like
const initialState = {
	dbWorkouts: [],
	favoriteWorkouts: [
		{
			_id: '1',
			workoutName: 'Push-Ups',
			workoutDescription:
				'Get into a plank position with your arms straight and hands a bit wider than shoulder-width. Lower your torso until your elbows form a 90 degree angle and push back up. Keep your neck neutral.',
			setsCount: 5,
			repsCount: 20,
		},
		{
			_id: '2',
			workoutName: 'Crunches',
			workoutDescription:
				'Lie on your back with your knees bent and hands behind your head. Tighten your abs as you lift and lower your shoulders rhythmically. Exhale as you lift and inhale as you lower, maintaining tension in your abs throughout the movement.',
			setsCount: 5,
			repsCount: 20,
		},
	],
	daily: [],
};

test('UPDATE_WORKOUT_LIST', () => {
	// newState object will be the result of what comes from the UPDATE_WORKOUT_LIST reducer
	// This function accepts the following two parameters:
	let newState = reducer(
		initialState, // current state object, so we can make our copy of it for the new state
		{
			type: UPDATE_WORKOUT_LIST, // This is the type of action we're performing
			dbWorkouts: [{}, {}], // the value of the new data we want to use with the action
		} // The action we're performing to update state, which is broken into the following two parts as an object
	);

	expect(newState.dbWorkouts.length).toBe(2);
	expect(initialState.dbWorkouts.length).toBe(0);
});

test('UPDATE_FAVORITES', () => {
	let newState = reducer(initialState, {
		type: UPDATE_FAVORITES,
		favoriteWorkouts: [{}, {}, {}],
	});

	expect(newState.favoriteWorkouts.length).toBe(3);
	expect(initialState.favoriteWorkouts.length).toBe(2);
});

test('ADD_TO_FAVORITES', () => {
	let newState = reducer(initialState, {
		type: ADD_TO_FAVORITES,
		dbWorkouts: { quantity: 1 },
	});

	expect(newState.favoriteWorkouts.length).toBe(3);
	expect(initialState.favoriteWorkouts.length).toBe(2);
});

test('REMOVE_FROM_FAVORITE', () => {
	let newState1 = reducer(initialState, {
		type: REMOVE_FROM_FAVORITE,
		_id: '1',
	});

	// the second item should now be the first
	expect(newState1.favoriteWorkouts.length).toBe(1);
	expect(newState1.favoriteWorkouts[0]._id).toBe('2');

	let newState2 = reducer(newState1, {
		type: REMOVE_FROM_FAVORITE,
		_id: '2',
	});

	// favoriteWorkouts is empty
	expect(newState2.favoriteWorkouts.length).toBe(0);

	expect(initialState.favoriteWorkouts.length).toBe(2);
});
