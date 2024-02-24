const db = require("../models/index");
const Income = db.Income;

const getIncomes = async (userId, year, month) => {
  let whereCondition = { userId };
  if (year) whereCondition.financial_year = year;
  if (month) whereCondition.month = month;
  return await Income.findAll({ where: whereCondition });
};

const getIncomeBreakdown = async (userId, year, month) => {
  // This function can be enhanced to provide a more detailed breakdown,
  // such as categorization, but for simplicity, it just fetches all incomes
  return await getIncomes(userId, year, month);
};

const getCurrentYearIncome = async (userId) => {
  const currentYear = new Date().getFullYear();
  return await getIncomes(userId, currentYear);
};

const getIncomeByYear = async (userId, year) => {
  return await getIncomes(userId, year);
};

const getIncomeByMonth = async (userId, month) => {
  return await getIncomes(userId, null, month);
};

const addIncome = async (userId, incomeData) => {
  incomeData.userId = userId;
  return await Income.create(incomeData);
};

module.exports = {
  getIncomes,
  getIncomeBreakdown,
  getCurrentYearIncome,
  getIncomeByYear,
  getIncomeByMonth,
  addIncome,
};
