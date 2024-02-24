const User = require("../models/user");

exports.register = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    console.error("Detailed error:", error); // Log the actual error to the console
    throw new Error("Error registering the user: " + error.message);
  }
};

exports.getUserDetails = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    throw new Error("Error fetching user details");
  }
};
