const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");

router.post("/register", userController.registerUser);
router.get("/:userId", auth, userController.getUserDetails);

module.exports = router;
