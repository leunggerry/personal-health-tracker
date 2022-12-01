import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth';

import LandingPage from './pages/LandingPage';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navigation from './components/Navigation';
import FooterComponent from './components/Footer';
import { StoreProvider } from './utils/GlobalState';
import Profile from './pages/Profile';
import Workouts from './pages/Workouts';
import Dashboard from './pages/Dashboard';

const httpLink = createHttpLink({
	uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('id_token');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	return (
		<ApolloProvider client={client}>
			<Router>
				{loading ? (
					<div className="loader-container">
						<div className="spinner"></div>
					</div>
				) : (
					<StoreProvider>
						<main
							className="flex flex-col pt-16 dark:bg-gray-900"
							// className="flex flex-col h-screen relative pt-16 dark:bg-gray-900"
						>
							<header className="shadow-md px-2 fixed top-0 left-0 right-0 dark:bg-gray-800 dark:border-gray-700 z-[10]">
								<Navigation />
							</header>

							<section
								className="mt-2 mx-0 gap-4 px-8 min-h-screen"
								// className="mt-2 mx-0 gap-4 px-8 flex-grow"
							>
								<Routes>
									<Route path="/" element={<LandingPage />} />
									<Route path="/login" element={<Login />} />
									<Route path="/signup" element={<Signup />} />
									<Route path="/profile" element={<Profile />} />
									<Route path="/dashboard" element={<Dashboard />} />
									<Route path="/workouts" element={<Workouts />} />
									<Route path="*" element={<NoMatch />} />
								</Routes>
							</section>
							<FooterComponent />
						</main>
					</StoreProvider>
				)}
			</Router>
		</ApolloProvider>
	);
}

export default App;
