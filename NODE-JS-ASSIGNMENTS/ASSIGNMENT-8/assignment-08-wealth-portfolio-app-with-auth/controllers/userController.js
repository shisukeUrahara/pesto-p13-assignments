const userService = require("../services/userService");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res, next) => {
  try {
    const user = await userService.register(req.body);
    // Generate JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    return res.status(201).json({ user, token });
  } catch (error) {
    next(error);
  }
};

exports.getUserDetails = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await userService.getUserDetails(userId);
    res.json(user);
  } catch (error) {
    next(error);
  }
};
