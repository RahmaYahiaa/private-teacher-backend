const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  userType: { type: String, default: 'student' },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  country: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  image: {
    type: String,
    default: "https://via.placeholder.com/150?text=No+Image" 
  },
  onlineStatus: { type: String, default: 'online' }, 
  dateOfBirth: {
    type: Date
  },
  bio: {
    type: String
  },
  interests: { type: String }

});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;