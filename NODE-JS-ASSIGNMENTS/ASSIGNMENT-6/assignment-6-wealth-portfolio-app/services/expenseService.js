const db = require("../models/index");
const Expense = db.Expense;
const User = db.User;

exports.getCurrentYearExpense = async (userId) => {
  const currentYear = new Date().getFullYear();
  return await Expense.findAll({
    where: { userId, financial_year: currentYear },
  });
};

exports.getExpensesByYear = async (userId, year) => {
  return await Expense.findAll({ where: { userId, financial_year: year } });
};

exports.getExpensesByMonth = async (userId, month) => {
  return await Expense.findAll({ where: { userId, month } });
};

exports.addExpense = async (userId, expenseData) => {
  expenseData.userId = userId;
  return await Expense.create(expenseData);
};
