const Teacher = require('../models/Teacher');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

exports.registerTeacher = async (req, res) => {
  const { first_name, last_name, email, phone, teacher_desc, password, subject_id, image, country, rating, years_of_experience, gender } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const teacherId = uuidv4();

    const user = new User({ email, password: hashedPassword, userType: 'teacher' });
    await user.save();

    const teacher = new Teacher({
      first_name,
      last_name,
      phone,
      teacher_desc,
      subject_id,
      Teacher_Id: teacherId,
      userId: user._id,
      image: image || undefined,
      country: country || 'Egypt', // Default country
      onlineStatus: 'online', // Default online status
      rating: rating || 0, // Default rating
      years_of_experience: years_of_experience || 0, // Default years of experience
      gender, // Set the provided gender
      // interests: interests || [] // Set the provided interests
    });

    await teacher.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


exports.getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find().populate('userId'); // Optionally populate the user information
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


// Controller لتحديث المدرس
exports.updateTeacher = async (req, res) => {
  try {
      const teacher = await Teacher.findOneAndUpdate(
          { userId: req.params.id }, 
          req.body, 
          { new: true, runValidators: true }
      );
      if (!teacher) {
          return res.status(404).json({ success: false, message: 'Teacher not found' });
      }
      res.json({ success: true, data: teacher });
  } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Server error' });
  }
};