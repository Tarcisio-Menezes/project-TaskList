const taskModel = require('../models/taskModel');

const registerTask = async (task, userName) => taskModel.taskRegister(task, userName);

const getAllTask = async (userName) => taskModel.getAll(userName);

module.exports = {
  registerTask,
  getAllTask,
};
