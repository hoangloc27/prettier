const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  console.log(token);
  try {
    jwt.verify(token, 'secret');
    next();
  } catch (err) {
    res.status(401).send(`Unauthorization ${err}`);
  }
};

module.exports = { verifyToken };
