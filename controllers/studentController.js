const User = require('../models/User');
const Student = require('../models/Student');

const bcrypt = require('bcryptjs');

exports.registerStudent = async (req, res) => {
  const { firstName, lastName, email, country, password ,date_of_birth, phone, gender, academic_level, language } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, userType: 'student' });
    await user.save();

    const student = new Student({ firstName, lastName, country,date_of_birth,phone,
      gender,
      academic_level,
      language, userId: user._id });
    await student.save();

    res.json({ success: true, student });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};




//Controller لتحديث الطالب
exports.updateStudent = async (req, res) => {
    try {
        const student = await Student.findOneAndUpdate(
            { userId: req.params.id }, 
            req.body, 
            { new: true, runValidators: true }
        );
        if (!student) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        res.json({ success: true, data: student });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
    
};
