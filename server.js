// Import required packages and files
const express = require('express');
const db = require('./config/connection'); // Import MongoDB connection setup
const routes = require('./routes'); // Import routes configuration

// Set up environment variables
const PORT = process.env.PORT || 3001; // Define port for the server to listen on

// Create an Express application instance
const app = express();

// Use middleware to parse incoming data
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.json()); // Middleware to parse JSON bodies

// Use routes defined in routes.js
app.use(routes); // Mount the routes on the Express app

// Connect to the MongoDB database and start the server
db.once('open', () => { // Once the MongoDB connection is established
    app.listen(PORT, () => { // Start the Express server
      console.log(`API server running on port ${PORT}!`); // Log server running message
    });
});
