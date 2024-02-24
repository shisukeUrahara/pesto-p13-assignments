const userService = require("../services/userService");

exports.registerUser = async (req, res, next) => {
  try {
    const user = await userService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

exports.getUserDetails = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    // console.log("**@ userId is , ", userId);
    const user = await userService.getUserDetails(userId);
    res.json(user);
  } catch (error) {
    next(error);
  }
};
