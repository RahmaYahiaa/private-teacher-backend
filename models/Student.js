const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  country: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;