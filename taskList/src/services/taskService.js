const taskModel = require('../models/taskModel');

const registerTask = async (title, description, date, status) => taskModel.recipesRegister(title, 
  description, date, status);

module.exports = {
  registerTask,
};
