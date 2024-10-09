const express = require('express');
const { registerStudent } = require('../controllers/studentController');

const router = express.Router();

router.post('/register', registerStudent);
router.put('/update/:id', (req, res) => {
    console.log(req.params);
    const teacherId = req.params.id;
    const updatedData = req.query;
});

module.exports = router;