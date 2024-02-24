const Savings = require("../models/savings");
const mongoose = require("mongoose");

exports.getCurrentYearSavings = async (userId) => {
  try {
    const currentYear = new Date().getFullYear();
    const savings = await Savings.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $addFields: {
          year: { $year: "$date" },
        },
      },
      {
        $match: {
          year: currentYear,
        },
      },
    ]);
    return savings;
  } catch (error) {
    // console.log("**@ current year savings error , ", error);
    throw new Error("Error fetching current year savings for user");
  }
};

exports.getSavingsByYear = async (userId, year) => {
  try {
    const savings = await Savings.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $addFields: {
          year: { $year: "$date" },
        },
      },
      {
        $match: {
          year: parseInt(year),
        },
      },
    ]);
    return savings;
  } catch (error) {
    throw new Error("Error fetching savings by year for user");
  }
};

exports.getSavingsByMonth = async (userId, month) => {
  try {
    const savings = await Savings.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $addFields: {
          month: { $month: "$date" },
        },
      },
      {
        $match: {
          month: parseInt(month),
        },
      },
    ]);
    return savings;
  } catch (error) {
    throw new Error("Error fetching savings by month for user");
  }
};

exports.addSavings = async (userId, savingsData) => {
  try {
    const savings = new Savings({ userId, ...savingsData });
    await savings.save();
    return savings;
  } catch (error) {
    throw new Error("Error adding savings for user");
  }
};
