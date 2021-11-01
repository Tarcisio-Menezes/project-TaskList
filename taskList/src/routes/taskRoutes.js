const router = require('express').Router();
const controller = require('../controllers/taskController');

router.post(controller.taskRegister);

module.exports = router;
