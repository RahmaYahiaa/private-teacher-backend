const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

// Route to get the list of teachers
router.get('/list', teacherController.getTeachers);

module.exports = router;
