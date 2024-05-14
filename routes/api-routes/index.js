// Setting up router
const router = require('express').Router();
// Importing routes for user and thought resources
const userRoutes = require('./user-routes'); // Import user routes
const thoughtRoutes = require('./thought-routes'); // Import thought routes
// Defining endpoints for user and thought resources
router.use('/user', userRoutes); // Endpoint for user-related operations
router.use('/thought', thoughtRoutes); // Endpoint for thought-related operations
// Exporting the router module
module.exports = router;
