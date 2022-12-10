// Data generators
const { faker } = require('@faker-js/faker');
// const casual = require('casual');
const bcrypt = require('bcrypt');

const db = require('../config/connection');
const { User, Workout } = require('../models');

//seed files
const workoutSeeds = require('./workout-seeds.json');

db.once('open', async () => {
	await Workout.deleteMany({});
	await User.deleteMany({});

	/******************************************************
	 * !!! User data
	 ******************************************************/
	const userData = [];

	for (let i = 0; i < 10; i += 1) {
		const username = faker.internet.userName();
		const email = faker.internet.email(username);

		const firstName = faker.name.firstName();
		const lastName = faker.name.lastName();
		const password = faker.internet.password();

		userData.push({ username, email, firstName, lastName, password });
	}

	//Add testing user
	const saltRounds = 10;
	const testPassword = await bcrypt.hash('password', saltRounds);
	console.log(testPassword);
	userData.push({ username: 'test_user', password: testPassword });
	const createdUsers = await User.collection.insertMany(userData);

	/******************************************************
	 * !!! Workout data
	 ******************************************************/

	// Create workout data
	const workoutData = [];

	// for (let i = 0; i < 50; i += 1) {
	// 	const workoutName = casual.title;
	// 	const workoutDescription = casual.short_description;
	// 	const setsCount = Math.floor(casual.random * 6);
	// 	const repsCount = Math.floor(casual.random * 10);

	// 	workoutData.push({ workoutName, workoutDescription, setsCount, repsCount });
	// }

	// Add seed from JSON
	for (let i = 0; i < workoutSeeds.length; i++) {
		workoutData.push(workoutSeeds[i]);
	}

	const createdWorkouts = await Workout.collection.insertMany(workoutData);

	// add the workouts to the test user
	console.log('all done!');
	process.exit(0);
});
