import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useProductReducer({
		dbWorkouts: [], // List of workouts in the database
		favoriteWorkouts: [], // List of User's favorite workouts on the dashboard
		daily: [], // List of daily workouts
		workouts: '',
	});

	console.log('GLOBAL-STATE: ', state);

	return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
	return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
