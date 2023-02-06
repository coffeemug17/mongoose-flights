const mongoose = require('mongoose');

//connecting it using the credentials in the.env file
mongoose.connect(process.env.DATABASE_URL);

//shortcut to the database connection object
const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});