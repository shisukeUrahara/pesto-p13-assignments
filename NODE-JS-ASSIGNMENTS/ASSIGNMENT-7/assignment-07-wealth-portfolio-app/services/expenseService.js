const Expense = require("../models/expense");
const mongoose = require("mongoose");

exports.getCurrentYearExpense = async (userId) => {
  try {
    const currentYear = new Date().getFullYear();
    const expenses = await Expense.aggregate([
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
    return expenses;
  } catch (error) {
    throw new Error("Error fetching current year expenses for user");
  }
};

exports.getExpensesByYear = async (userId, year) => {
  try {
    const expenses = await Expense.aggregate([
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
    return expenses;
  } catch (error) {
    throw new Error("Error fetching expenses by year for user");
  }
};

exports.getExpensesByMonth = async (userId, month) => {
  try {
    const expenses = await Expense.aggregate([
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
    return expenses;
  } catch (error) {
    throw new Error("Error fetching expenses by month for user");
  }
};

exports.addExpense = async (userId, expenseData) => {
  try {
    const expense = new Expense({ userId, ...expenseData });
    await expense.save();
    return expense;
  } catch (error) {
    throw new Error("Error adding expense for user");
  }
};
