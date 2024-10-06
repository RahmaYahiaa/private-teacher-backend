const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());



mongoose.connect("mongodb+srv://root:root@private-teacher.t6sv6.mongodb.net/?retryWrites=true&w=majority&appName=private-teacher", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


// استخدام الـ Routes
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);

// بدء تشغيل الخادم
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});