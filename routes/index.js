// Requiring necessary dependencies and setting up router
const router = require('express').Router(); 

// Importing API routes
const apiRoutes = require('./api-routes');

// Setting up API routes under the '/api' endpoint
router.use('/api', apiRoutes);

// Handling 404 errors for routes not found
router.use((req, res) => {
    return res.status(404).send('Not found');
});

// Exporting the router module
module.exports = router;
