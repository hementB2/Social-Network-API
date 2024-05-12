// Importing the User and Thought models from their respective files
const User = require('./User'); // Import User model
const Thought = require('./Thought'); // Import Thought model

// Exporting the User and Thought models as a single module for easy access in other parts of the application
module.exports = { Thought, User };
