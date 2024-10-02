const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authController = require('../controllers/authController');
// تسجيل طالب
router.post('/students/register', authController.registerStudent);

// تسجيل مدرس
router.post('/teachers/register', authController.registerTeacher);
router.post('/login', authController.login);

module.exports = router;