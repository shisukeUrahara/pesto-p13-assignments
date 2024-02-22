const db = require("../models/index");
const Income = db.Income;
const Expense = db.Expense;

exports.getDetailedBreakdown = async (userId) => {
  const incomes = await Income.findAll({ where: { userId } });
  const expenses = await Expense.findAll({ where: { userId } });
  return { incomes, expenses };
};

exports.getBreakdownByYear = async (userId, year) => {
  const incomes = await Income.findAll({
    where: { userId, financial_year: year },
  });
  const expenses = await Expense.findAll({
    where: { userId, financial_year: year },
  });
  return { incomes, expenses };
};

exports.getBreakdownByMonth = async (userId, month) => {
  const incomes = await Income.findAll({ where: { userId, month } });
  const expenses = await Expense.findAll({ where: { userId, month } });
  return { incomes, expenses };
};
