const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone: { type: String, required: true },
  teacher_desc: { type: String, required: true },
  subject_id: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  Teacher_Id: { type: String, unique: true } 
});

const Teacher = mongoose.model('Teacher', TeacherSchema);
module.exports = Teacher;