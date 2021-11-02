const router = require('express').Router();
const controller = require('../controllers/taskController');
const middlewareAuth = require('../middlewares/auth');

router.post('/tasks', middlewareAuth, controller.taskRegister);
router.get('/tasks', middlewareAuth, controller.getAllTasksUser);

module.exports = router;
