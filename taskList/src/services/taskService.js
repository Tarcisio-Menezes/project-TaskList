const taskModel = require('../models/taskModel');

const registerTask = async (task, userName) => taskModel.taskRegister(task, userName);

const getAllTask = async (userName) => taskModel.getAll(userName);

const getAllAlphOrder = async (userName) => taskModel.getAllAlphabeticalOrder(userName);

const taskEdit = async (task, userName) => taskModel.taskEdit(task, userName);

module.exports = {
  registerTask,
  getAllTask,
  getAllAlphOrder,
  taskEdit,
};
