const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  const secret = process.env.SECRET;
  try {
    const token = req.headers.authorization;
    if (!token) {
      const error = ({ code: 'missingAuthToken' });
      return next(error);
    }
    jwt.verify(token, secret);
    next();
  } catch (err) {
      return res.status(401).json({
        message: 'jwt malformed',
      });
  }
};
