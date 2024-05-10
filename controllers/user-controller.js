const { User } = require('../models');

const UserController = {
  // 1. Retrieve all users
  getAllUsers(req, res) {
    User.find({})
      .then(userData => res.json(userData)) // Send response with user data
      .catch(err => res.status(500).json(err)); // Error handling for server errors
  },