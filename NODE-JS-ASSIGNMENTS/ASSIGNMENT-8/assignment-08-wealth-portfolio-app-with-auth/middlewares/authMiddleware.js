// authMiddleware.js
const jwt = require("jsonwebtoken");
const db = require("../models/index");
const User = db.User;
module.exports = async (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).send("Authorization header missing");
  }

  const token = authHeader.replace("Bearer ", "");

  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (req.params.userId && verified.id.toString() !== req.params.userId) {
      return res.status(401).send("Unauthorized user");
    }
    const user = await User.findByPk(verified.id);

    if (!user) {
      return res.status(401).send("User not found");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
