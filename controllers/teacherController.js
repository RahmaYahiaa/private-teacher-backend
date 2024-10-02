const { v4: uuidv4 } = require('uuid'); // Import UUID for generating unique IDs
const Teacher = require('../models/Teacher'); // Ensure you have your Teacher model imported
const User = require('../models/User'); // Ensure you have your User model imported
const bcrypt = require('bcryptjs');

exports.registerTeacher = async (req, res) => {
  const { first_name, last_name, email, phone, teacher_desc, password, subject_id } = req.body;

  // Validate email
  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required.' });
  }

  try {
    // Check if a teacher with the same email already exists
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ success: false, message: 'Teacher with this email already exists.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Generate a unique Teacher_Id
    const teacherId = uuidv4(); 

    // Create the new user instance
    const user = new User({ email, password: hashedPassword });
    await user.save(); // Save the user to the database

    // Create the new teacher instance
    const teacher = new Teacher({
      first_name,
      last_name,
      email, // Use the email from the request
      phone,
      teacher_desc,
      password: hashedPassword, // Use the hashed password
      subject_id,
      Teacher_Id: teacherId, // Assign the unique Teacher_Id
      userId: user._id // Link to the user created
    });

    await teacher.save(); // Save the teacher to the database

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
