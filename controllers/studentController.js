const User = require('../models/User');
const Student = require('../models/Student');
const bcrypt = require('bcryptjs');

exports.registerStudent = async (req, res) => {
  const { firstName, lastName, email, country, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, userType: 'student' });
    await user.save();

    const student = new Student({ firstName, lastName, country, userId: user._id });
    await student.save();

    res.json({ success: true, student });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};