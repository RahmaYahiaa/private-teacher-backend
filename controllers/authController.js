exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // ابحث عن المستخدم باستخدام البريد الإلكتروني
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' }); // إذا لم يوجد المستخدم
      }
  
      // تحقق من تطابق كلمة المرور
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' }); // إذا كانت كلمة المرور غير صحيحة
      }
  
      // إذا تم التحقق من المستخدم بنجاح
      res.json({ success: true, message: 'Login successful' });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message }); // أي خطأ آخر
    }
  };
  


const User = require('../models/User');
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const bcrypt = require('bcryptjs');

exports.registerStudent = async (req, res) => {
  const { firstName, lastName, email, country, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();

    const student = new Student({ firstName, lastName, country, userId: user._id });
    await student.save();

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.registerTeacher = async (req, res) => {
  const { first_name, last_name, email, phone, teacher_desc, password, subject_id } = req.body;

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