const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone: { type: String, required: true },
  teacher_desc: { type: String, required: true },
  subject_id: { type: String, required: true },
  Teacher_Id: { type: String, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  image: {
    type: String,
    default: "https://via.placeholder.com/150?text=No+Image" // URL to default image
  },
  country: { type: String, default: 'Egypt' }, // Country field
  onlineStatus: { type: String, default: 'online' }, // Online status
  rating: { type: Number, default: 0 }, // Rating field
  years_of_experience: { type: Number, default: 0 }, // Added field for years of experience
  gender: { type: String, default: 'Male', required: true } // Added field for gender
});

const Teacher = mongoose.model('Teacher', TeacherSchema);
module.exports = Teacher;
