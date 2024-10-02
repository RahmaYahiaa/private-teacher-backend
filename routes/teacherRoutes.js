const express = require('express');
const { registerTeacher } = require('../controllers/teacherController');

const router = express.Router();

router.post('/register', registerTeacher);

module.exports = router;