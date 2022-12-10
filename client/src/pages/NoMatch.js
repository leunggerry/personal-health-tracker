import React from 'react';
import Jumbotron from '../components/Jumbotron';

const NoMatch = () => {
	return (
		<div>
			<Jumbotron>
				<h1 className="text-5xl font-extrabold dark:text-white">
					404 Page Not Found
				</h1>
				<h1 className="text-5xl font-extrabold dark:text-white">
					<span role="img" aria-label="Face With Rolling Eyes Emoji">
						🙄
					</span>
				</h1>
			</Jumbotron>
		</div>
	);
};

export default NoMatch;
