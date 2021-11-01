const jwt = require('jsonwebtoken');
const model = require('../models/usersModel');

const validLogin = async (name, password) => {
  const user = await model.registerExists(name);
  if (user && user.password === password) return true;
  return false;
};

const generatorToken = (name, password) => {
  const secret = env.process.SECRET;
  
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const payload = {
    user: name,
    password,
  };

  const token = jwt.sign({ data: payload }, secret, jwtConfig);
  return token;
};

const userLogin = async (name, password) => {
  const userIsValid = await validLogin(name, password);
  if (userIsValid) {
    const token = generatorToken(name, password);
    return {
      token,
    };
  } return ({
      error: { code: 'invalidLogin', message: 'Incorrect username or password' },
  });
};

module.exports = {
  userLogin,
}