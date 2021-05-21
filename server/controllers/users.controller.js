const userController = {};
const User = require('../models/User');
const bcrypt = require('bcrypt');
const {
  AppError,
  catchAsync,
  sendResponse,
} = require('../helpers/utils.helper');

userController.create = catchAsync(async (req, res, next) => {
  try {
    const newUser = req.body;
    const user = await new User(newUser);
    await user.save();
    accessToken = await user.generateToken();

    res.status(201).json({
      success: true,
      data: newUser,
      token: accessToken,
      message: `User ${user.name} created `,
    });
  } catch (error) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
});

userController.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({
      success: false,
      error: 'Wrong email or password',
    });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({
      success: false,
      error: 'Wrong email or password',
    });

  accessToken = await user.generateToken();

  res.status(200).json({
    success: true,
    token: accessToken,
    data: user,
    message: `Logged in successfully!`,
  });
});

userController.list = catchAsync(async (req, res, next) => {});

userController.update = catchAsync(async (req, res, next) => {});

userController.delete = catchAsync(async (req, res, next) => {});

module.exports = userController;
