const mongoose = require('mongoose');

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/personal-health-tracker',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

module.exports = mongoose.connection;
