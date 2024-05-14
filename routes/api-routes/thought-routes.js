// Requiring necessary dependencies and controllers
const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    deleteThought,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

// Route definitions for retrieving and creating Thoughts
router.route('/').get(getAllThoughts).post(createThought);

// Route definitions for retrieving, updating, and deleting Thoughts
router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

// Route definition for adding a reaction to a Thought
router.route('/:thoughtId/reactions').post(createReaction);

// Route definition for deleting a reaction from a Thought
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Exporting the router module
module.exports = router;
