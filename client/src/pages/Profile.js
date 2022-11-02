/**
 * Components to add
 *  - ProfilePicture
 *  - UserInfo
 */
import React from 'react';

import Auth from '../utils/auth';

const Profile = () => {
	return Auth.loggedIn() ? (
		<div className="container">
			<p>Profile page</p>
		</div>
	) : (
		// </Container>
		<h3>
			<span role="img" aria-label="shocked">
				😱
			</span>
			Oops, Sign up or Login to view this page!
		</h3>
	);
};

export default Profile;
