const Contact = require('../models/contactModel');

// Controller function to handle form submission
exports.submitContactForm = async (req, res) => {
  try {
    // Create a new contact entry with data from the request body
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    // Save the contact data to MongoDB
    await newContact.save();

    // Send a success response
    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    // Handle errors and send failure response
    res.status(500).json({ message: 'Error submitting form', error: error.message });
  }
};
