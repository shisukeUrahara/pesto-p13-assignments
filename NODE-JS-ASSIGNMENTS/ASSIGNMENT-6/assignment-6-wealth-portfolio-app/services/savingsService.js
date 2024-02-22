const db = require("../models/index");
const Savings = db.Saving;

exports.getCurrentYearSavings = async (userId) => {
  const currentYear = new Date().getFullYear();
  return await Savings.findAll({
    where: { userId, financial_year: currentYear },
  });
};

exports.getSavingsByYear = async (userId, year) => {
  return await Savings.findAll({ where: { userId, financial_year: year } });
};

exports.getSavingsByMonth = async (userId, month) => {
  return await Savings.findAll({ where: { userId, month } });
};

exports.addSavings = async (userId, savingsData) => {
  savingsData.userId = userId;
  return await Savings.create(savingsData);
};
