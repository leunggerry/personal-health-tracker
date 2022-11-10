import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Box } from '@chakra-ui/react';

import LandingPage from './pages/LandingPage';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
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
						<Box className="applicationBox">
							<Navigation />
							<Routes>
								<Route path="/" element={<LandingPage />} />
								<Route path="/login" element={<Login />} />
								<Route path="/signup" element={<Signup />} />
								<Route path="/profile" element={<Profile />} />
								<Route path="/dashboard" element={<Dashboard />} />
								{/* REMOVED WORKOUT PAGE ROUTE -- IT'S STILL IN DEVELOPMENT */}
								<Route path="/workouts" element={<Workouts />} />
								{/* TODO: Can we take this out. I don't think we are using it */}
								<Route path="*" element={<NoMatch />} />
							</Routes>
							<Footer />
						</Box>
					</StoreProvider>
				)}
			</Router>
		</ApolloProvider>
	);
}

export default App;
