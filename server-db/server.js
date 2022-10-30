const express = require('express');
//import Apollo-Server
const { ApolloServer } = require('apollo-server-express');
//import middleware authentication
const { authMiddleware } = require('./utils/auth');

//import the GQL typeDefs and Reovlers
const { typeDefs, resolvers } = require('./schemas');
// import the db
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

//create a new Apollo Server and pass in our schema in
const server = new ApolloServer({
	typeDefs,
	resolvers,
	// the context method is makes it so the resolver can see the context parameter
	context: authMiddleware,
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static('public'));

// app.use(require('./routes'));

// Create a new instance of the ApolloSerer with the GraphQL Schema
const startApolloServer = async (typeDefs, resolvers) => {
	await server.start();
	//integrate the Apollo server with the Express applicaiton as middleware
	server.applyMiddleware({ app });
};

db.once('open', () => {
	app.listen(PORT, () => {
		console.log(`API server running on port ${PORT}!`);
		// log where we can go to test our GQL API
		console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
	});
});

//call the function to start the Apollo Server
startApolloServer();
