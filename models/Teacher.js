const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  userType: { type: String, default: 'teacher' },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone: { type: String, required: true },
  teacher_desc: { type: String, required: true },
  subject_id: { type: String, required: true },
  Teacher_Id: { type: String, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  image: {
    type: String,
    default: "https://via.placeholder.com/150?text=No+Image" 
  },
  country: { type: String, default: 'Egypt' }, 
  onlineStatus: { type: String, default: 'online' },
  rating: { type: Number, default: 0 }, 
  years_of_experience: { type: Number, default: 0 }, 
  gender: { type: String, default: 'Male', required: true } 
});

const Teacher = mongoose.model('Teacher', TeacherSchema);
module.exports = Teacher;
