const { User } = require('../models');

const UserController = {
  // 1. Retrieve all users
  getAllUsers(req, res) {
    User.find({})
      .then(userData => res.json(userData)) // Send response with user data
      .catch(err => res.status(500).json(err)); // Error handling for server errors
  },

  // 2. Retrieve a user by ID
  getUserById(req, res) {
    User.findById(req.params.userId)
      .then(userData => res.json(userData)) // Send response with user data
      .catch(err => res.status(500).json(err)); // Error handling for server errors
  },
  
  // 3. Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then(userData => res.json(userData)) // Send response with created user data
      .catch(err => res.status(500).json(err)); // Error handling for server errors
  },

  // 4. Update a user by ID
  updateUserById(req, res) {
    User.findOneAndUpdate(req.params.id, req.body, { new: true })
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(userData);
      })
      .catch(err => res.status(500).json(err)); // Error handling for server errors
  },

  // 5. Delete a user by ID
  deleteUserById(req, res) {
    User.findOneAndDelete(req.params.id)
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
      })
      .catch(err => res.status(500).json(err)); // Error handling for server errors
  },

  // 6. Add friend to user's friend list
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body.friendId || req.params.friendId} },
      { new: true }
    )
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(userData);
      })
      .catch(err => res.status(500).json(err)); // Error handling for server errors
  },

  // 7. Remove friend from user's friend list
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "User not found" });
        }
        const removed = !dbUserData.friends.includes(req.params.friendId);
        if (removed) {
          res.json({ message: "Friend removed successfully!", dbUserData });
        } else {
          res.json(dbUserData);
        }
      })
      .catch((err) => res.status(400).json(err)); // Error handling for server errors
  },
};

// Export UserController
module.exports = UserController;
