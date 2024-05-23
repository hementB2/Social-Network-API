// Importing the Mongoose library for MongoDB interaction
const mongoose = require('mongoose');

// Connecting to the MongoDB database using the provided URI or defaulting to a local URI
mongoose.connect(process.env.MONOGDB_URI || 'mongodb://localhost:27017/HementFriends', {
    useNewUrlParser: true, // Use new URL parser
    useUnifiedTopology: true, // Use new server discovery and monitoring engine
});

// Exporting the database connection as a module
module.exports = mongoose.connection;
