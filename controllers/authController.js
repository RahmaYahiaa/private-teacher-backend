const User = require('../models/User');
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const bcrypt = require('bcryptjs');


exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' }); // User does not exist
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' }); // Incorrect password
    }

    // If user is successfully verified, return user information along with userType
    return res.json({
      success: true,
      message: 'Login successful',
      _id: user._id,  // Add the user ID to the response
      userType: user.userType, // Include userType in the response
    });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    res.status(500).json({ success: false, message: err.message }); // Any other error
  }
};



