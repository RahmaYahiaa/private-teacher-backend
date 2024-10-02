// routes/teacherRoutes.js
const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

// Route to register a teacher
router.post('/register', teacherController.registerTeacher);

module.exports = router;
