const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  userType: { type: String, default: 'teacher' },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone: { type: String, required: true },
  teacher_desc: { type: String, required: true },
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
  gender: { type: String, default: 'Male' },
  date_of_birth: { type: Date },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  is_active: { type: Boolean, default: true },
  is_deleted: { type: Boolean, default: false },
  level: {
    type: String,
    enum: ['All levels', 'Junior', 'Middle', 'Senior'],
    default: 'Junior'
  },
  language: {
    type: String,
    enum: ['English', 'Arabic', 'All Languages'],
    default: 'English'
  },
  subject: {
    type: String,
    enum: ['Math', 'Science', "Arabic", "English", "French", "Biology", "Chemistry", "Physics", "History", "Geography", "Psychology", "Sociology", "Philosophy", "Political"],
    default: 'Math'
  },
});



const Teacher = mongoose.model('Teacher', TeacherSchema);
module.exports = Teacher;