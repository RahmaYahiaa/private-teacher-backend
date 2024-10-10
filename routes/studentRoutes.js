const express = require('express');
const { registerStudent, updateStudent } = require('../controllers/studentController');

const router = express.Router();

router.post('/register', registerStudent);

router.put('/update/:id', updateStudent);


module.exports = router;