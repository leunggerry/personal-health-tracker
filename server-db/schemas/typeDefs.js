// Import The GQL Tagged Templated function
const { gql } = require('apollo-server-express');

// create our TypeDefs
const typeDefs = gql`
	type Query {
		helloWorld: String
	}
`;

module.exports = typeDefs;
