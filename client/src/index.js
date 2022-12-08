/**
 * ! description
 * Updgrating from ReactDOM.render to createRoot in React 18
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'flowbite';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import * as serviceWorker from './serviceWorker';

const root = createRoot(document.getElementById('root'));
root.render(
	<ErrorBoundary>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ErrorBoundary>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
