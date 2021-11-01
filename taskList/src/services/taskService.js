const taskModel = require('../models/taskModel');

const registerTask = async (task, userName) => taskModel.taskRegister(task, userName);

module.exports = {
  registerTask,
};
