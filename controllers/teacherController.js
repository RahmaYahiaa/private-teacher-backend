const User = require('../models/User');
const Teacher = require('../models/Teacher');
const bcrypt = require('bcryptjs');

exports.registerTeacher = async (req, res) => {
  const { first_name, last_name, phone, teacher_desc, subject_id, email, password } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();

    const teacher = new Teacher({ first_name, last_name, phone, teacher_desc, subject_id, userId: user._id });
    await teacher.save();
    
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};