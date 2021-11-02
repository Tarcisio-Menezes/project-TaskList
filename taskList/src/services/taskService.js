const taskModel = require('../models/taskModel');

const registerTask = async (task, userName) => taskModel.taskRegister(task, userName);

const getAllTask = async (userName) => taskModel.getAll(userName);

const getAllAlphOrder = async (userName) => taskModel.getAllAlphabeticalOrder(userName);

const taskEdit = async (task, userName) => {
  const { id } = task;
  const taskById = await taskModel.searchTaskById(id);
  if (taskById.userName.equals(userName)) {
    return taskModel.taskEdit(task, userName);
  } return ({
    error: { code: 'invalid' },
  });  
};

module.exports = {
  registerTask,
  getAllTask,
  getAllAlphOrder,
  taskEdit,
};
