const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
	signToken: function ({ username, email, _id }) {
		const payload = { username, email, _id };

		/**
		 * JSON Web Token
		 *
		 * Contain all the data you need encoded into a single string.
		 *
		 * Eliminate the need to save a session ID on the back end or in the database.
		 *
		 * Decrease the amount of server-side resources needed to maintain authentication.
		 *
		 * Can be generated anywhere and aren't tied to a single domain like cookies.
		 */
		return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
	},
	authMiddleware: function ({ req }) {
		// allows token to be sent via req.body, req.query, or headers
		let token = req.body.token || req.query.token || req.headers.authorization;

		// separate "Bearer" from "<tokenvalue>"
		if (req.headers.authorization) {
			token = token.split(' ').pop().trim();
		}

		// if no token, return request object as is
		if (!token) {
			return req;
		}

		try {
			// decode and attach user data to request object
			const { data } = jwt.verify(token, secret, { maxAge: expiration });
			req.user = data;
		} catch {
			console.log('Invalid token');
		}

		// return updated request object
		return req;
	},
};
