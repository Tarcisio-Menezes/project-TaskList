const { ObjectId } = require('mongodb');
const connection = require('./connection');

const taskRegister = async (title, description, date, status) => {
  try {
    const db = await connection();
    const register = await db.collection('tasks').insertOne({
       title, description, date, status });
    return ({
      task: {
        title, 
        description,
        date,
        status,
        _id: register.insertedId,
      },
    });
  } catch (err) {
      return ({
        error: 'Error when register task in the database',
        code: err,
      });
    }
};

const getAll = async () => {
  try {
    const db = await connection();
    return db.collection('tasks').find().toArray();
  } catch (err) {
      return ({
        error: 'Error when get task in the database',
        code: err,
      });
    }
};

const taskEdit = async ({ id, title, description, date, status }) => {
  try {
    const db = await connection();
    await db.collection('tasks').updateOne({ _id: ObjectId(id) }, 
      { $set: { title, description, date, status } });
    return ({ _id: id,
      title, 
      description,
      date,
      status,
      _id: register.insertedId,
    });
  } catch (err) {
      return ({
        error: 'Error when edit task in the database',
        code: err,
      });
    }
};

const taskDelete = async (taskId) => {
  try {
    const db = await connection();
    return db.collection('tasks').removeOne({ _id: ObjectId(recipeId) });
  } catch (err) {
    return ({
      error: 'Error when remove task in the database', code: err });
  }
};

module.exports = {
  taskRegister,
  getAll,
  taskEdit,
  taskDelete,
};
