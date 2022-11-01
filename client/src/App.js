import React from 'react';
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
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
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
	return (
		<ApolloProvider client={client}>
			<Router>
				<StoreProvider>
					<Navigation />
					{/* <Box maxW="lm" borderWidth="1px" borderRadius="lg" overflow="hidden"> */}
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/success" element={<Success />} />
						<Route path="/orderHistory" element={<OrderHistory />} />
						{/* Adding profile route */}
						<Route path="/profile" element={<Profile />} />
						{/* Adding workouts route */}
						<Route path="/workouts" element={<Workouts />} />
						{/* Adding dashboard route */}
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="*" element={<NoMatch />} />
					</Routes>
					{/* </Box> */}
					<Box maxW="lm" overflow="hidden">
						<Footer />
					</Box>
				</StoreProvider>
			</Router>
		</ApolloProvider>
	);
}

export default App;
