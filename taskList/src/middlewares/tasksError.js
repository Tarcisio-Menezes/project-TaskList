module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }

  if (err.code === 'missingAuthToken') {
    return res.status(401).json({ message: 'missing auth token' });
  }

  return res.status(500).json({ message: 'fatal error' });
};