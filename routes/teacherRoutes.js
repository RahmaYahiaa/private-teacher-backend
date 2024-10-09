const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');


router.get('/list', teacherController.getTeachers);
router.post('/register', teacherController.registerTeacher);

router.put('/update/:id', (req, res) => {
    console.log(req.params);
    const teacherId = req.params.id;
    const updatedData = req.query;


}
);

module.exports = router;
