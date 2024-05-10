const { Thought, User, Reaction } = require('../models'); // Importing necessary models
const { Types } = require('mongoose'); // Importing Mongoose Types for ObjectId

// Define the ThoughtController object, which contains methods for handling various API requests related to thoughts
const ThoughtController = {
    // Handler for getting all thoughts
    async getAllThoughts(req, res) {
      try {
        const thoughts = await Thought.find({}); // Fetch all thoughts from the database
        res.json(thoughts); // Send response with thoughts
      } catch (err) {
        res.status(500).json(err); // Error handling for server errors
      }
    },