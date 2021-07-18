const ErrorResponse = require('../utils/error-response');

const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    error: {
      status: err.status || 500,
      message: err.message || 'Server error',
    },
  });
};

module.exports = errorHandler;
