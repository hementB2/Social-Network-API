// Requiring necessary dependencies and controllers
const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
//   checkFriendRemoved,
} = require('../../controllers/user-controller');

// Route definitions for retrieving and creating users
router.route('/').get(getAllUsers).post(createUser);

// Route definitions for retrieving, updating, and deleting users
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

// Route definitions for adding and removing friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// Exporting the router module
module.exports = router;
