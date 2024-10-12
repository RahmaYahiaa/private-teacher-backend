const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Define the POST route for form submission
router.post('/submit', contactController.submitContactForm);

module.exports = router;
