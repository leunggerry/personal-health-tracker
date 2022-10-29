// Data generators
const { faker } = require('@faker-js/faker');
const casual = require('casual');

const db = require('../config/connection');
const { User, Workout } = require('../models');

db.once('open', async () => {
	await Workout.deleteMany({});
	await User.deleteMany({});

	/******************************************************
	 * !!! User data
	 ******************************************************/ const userData = [];

	for (let i = 0; i < 50; i += 1) {
		const username = faker.internet.userName();
		const email = faker.internet.email(username);
		const password = faker.internet.password();

		userData.push({ username, email, password });
	}
	const createdUsers = await User.collection.insertMany(userData);

	/******************************************************
	 * !!! Workout data
	 ******************************************************/

	// Create workout data
	const workoutData = [];
	for (let i = 0; i < 50; i += 1) {
		const workoutName = casual.title;
		const workoutDescription = casual.short_description;
		const setsCount = Math.floor(casual.random * 6);
		const repsCount = Math.floor(casual.random * 10);

		workoutData.push({ workoutName, workoutDescription, setsCount, repsCount });
	}

	const createdWorkouts = await Workout.collection.insertMany(workoutData);
	console.log('all done!');
	process.exit(0);
});
