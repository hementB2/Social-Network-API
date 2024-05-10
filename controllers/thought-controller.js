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

  // Handler for getting thought by ID
  async getThoughtsById(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId }); // Find thought by ID
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' }); // If thought not found, return 404
      } else {
        res.json(thought); // If found, return thought
      }
    } catch (err) {
      res.status(500).json(err); // Error handling for server errors
    }
  },

  // Handler for creating a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body); // Create a new thought
      res.status(201).json(thought); // Send response with created thought
    } catch (err) {
      res.status(500).json(err); // Error handling for server errors
    }
  },
  
  // Handler for deleting a thought by ID
  async deleteThought(req, res) {
    try {
        const thought = await Thought.findByIdAndDelete({_id:req.params.thoughtId}); // Find and delete thought by ID
        res.status(200).json(thought); // Send response with deleted thought
    } catch (err) {
        res.status(500).json(err); // Error handling for server errors
    }
  },

  // Handler for updating a thought by ID
  async updateThoughtById(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
        new: true,
      }); // Find and update thought by ID
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' }); // If thought not found, return 404
      } else {
        res.json(thought); // If found, return updated thought
      }
    } catch (err) {
      res.status(500).json(err); // Error handling for server errors
    }
  },

  // Handler for creating a reaction on a thought
  async createReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
          {_id:req.params.thoughtId},
          {$addToSet: {reactions: req.body}},
          {runValidators: true, new: true}
      ); // Find thought by ID and add a reaction
      thought ? res.json(thought) : res.status(404).json({message: 'Thought not found'}); // Send response with updated thought or 404 if thought not found
    } catch (e) {
      res.status(500).json(e); // Error handling for server errors
    }
  },

  // Handler for deleting a reaction from a thought
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
          {_id: req.params.thoughtId},
          {$pull: {reactions: {reactionId: req.params.reactionId}}},
          {runValidators: true, new: true}
      ); // Find thought by ID and delete a reaction
      thought ? res.json(thought) : res.status(404).json({message: 'Thought not found'}); // Send response with updated thought or 404 if thought not found
    } catch (e) {
      res.status(500).json(e); // Error handling for server errors
    }
  },
};

// Export ThoughtController
module.exports = ThoughtController;
