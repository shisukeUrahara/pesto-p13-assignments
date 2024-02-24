const Income = require("../models/income");
const Expense = require("../models/expense");
const moment = require("moment");

exports.getDetailedBreakdown = async (userId) => {
  try {
    const incomes = await Income.find({ userId });
    const expenses = await Expense.find({ userId });
    return { incomes, expenses };
  } catch (error) {
    throw new Error("Error fetching detailed breakdown for user");
  }
};

exports.getBreakdownByYear = async (userId, year) => {
  try {
    const startDate = new Date(`${year}-01-01T00:00:00.000Z`);
    const endDate = new Date(`${year}-12-31T23:59:59.999Z`);

    const incomes = await Income.find({
      userId,
      date: {
        $gte: startDate,
        $lte: endDate,
      },
    });

    const expenses = await Expense.find({
      userId,
      date: {
        $gte: startDate,
        $lte: endDate,
      },
    });

    return { incomes, expenses };
  } catch (error) {
    throw new Error("Error fetching breakdown by year for user");
  }
};

exports.getBreakdownByMonth = async (userId, month) => {
  try {
    if (!month) {
      throw new Error("Month is not defined.");
    }

    const formattedMonth = month.toString().padStart(2, "0");
    // console.log("**@ formatted month is , ", formattedMonth);

    const incomes = await Income.aggregate([
      {
        $match: {
          userId: userId,
          date: {
            $gte: moment(`01-${formattedMonth}-2000`, "DD-MM-YYYY").toDate(),
            $lte: moment(`31-${formattedMonth}-2100`, "DD-MM-YYYY").toDate(),
          },
        },
      },
    ]);

    const expenses = await Expense.aggregate([
      {
        $match: {
          userId: userId,
          date: {
            $gte: moment(`01-${formattedMonth}-2000`, "DD-MM-YYYY").toDate(),
            $lte: moment(`31-${formattedMonth}-2100`, "DD-MM-YYYY").toDate(),
          },
        },
      },
    ]);

    return { incomes, expenses };
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error fetching breakdown by month for user");
  }
};
