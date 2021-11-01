const joi = require('joi').extend(require('@joi/date'));
const service = require('../services/taskService');

const taskRegister = async (req, res, next) => {
  const { error } = joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    date: joi.string().required(),
    status: joi.date().format('DD-MM-YYYY').utc().required(),
  }).validate(req.body);

  if (error) return next(error);

  const { title, description, date, status } = req.body;

  const register = await service.registerTask(title, description, date, status);
  if (register.error) return next(register.error);
  return res.status(201).json(register);
};

module.exports = {
  taskRegister,
};
