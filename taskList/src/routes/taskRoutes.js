const router = require('express').Router();
const controller = require('../controllers/taskController');

router.post('/tasks', controller.taskRegister);

module.exports = router;
