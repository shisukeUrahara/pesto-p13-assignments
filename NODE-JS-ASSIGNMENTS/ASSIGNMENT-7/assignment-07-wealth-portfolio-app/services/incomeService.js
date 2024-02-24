const Income = require("../models/income");
const mongoose = require("mongoose");

const getIncomes = async (userId, year, month) => {
  try {
    let pipeline = [
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId),
        },
      },
    ];

    if (year) {
      pipeline.push({
        $addFields: {
          year: { $year: "$date" },
        },
      });
      pipeline.push({
        $match: {
          year: parseInt(year),
        },
      });
    }

    if (month) {
      pipeline.push({
        $addFields: {
          month: { $month: "$date" },
        },
      });
      pipeline.push({
        $match: {
          month: parseInt(month),
        },
      });
    }

    const incomes = await Income.aggregate(pipeline);
    return incomes;
  } catch (error) {
    throw new Error("Error fetching incomes for user");
  }
};

const getIncomeBreakdown = async (userId, year, month) => {
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
  try {
    const income = new Income({ userId, ...incomeData });
    await income.save();
    return income;
  } catch (error) {
    throw new Error("Error adding income for user");
  }
};

module.exports = {
  getIncomes,
  getIncomeBreakdown,
  getCurrentYearIncome,
  getIncomeByYear,
  getIncomeByMonth,
  addIncome,
};
