const User = require('../models/User');
const ErrorResponse = require('../utils/error-response');

exports.signUp = async (req, res, next) => {
  const { email, password } = req.body;
  const user = new User({
    email,
    password,
  });
  try {
    const insertedUser = await user.save();
    res.status(201).json({
      success: true,
      data: insertedUser,
    });
  } catch (e) {
    return next(new ErrorResponse(500, 'Server Error'));
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = User.findOne({ email });
  } catch (e) {
    return next(new ErrorResponse(500, 'Server Error'));
  }
};
