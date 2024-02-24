const { incomeService } = require("../services/index");

exports.fetchCurrentYearIncome = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const income = await incomeService.getCurrentYearIncome(userId);
    res.json(income);
  } catch (error) {
    next(error);
  }
};

exports.filterIncomeByYear = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const year = req.params.year;
    const income = await incomeService.getIncomeByYear(userId, year);
    res.json(income);
  } catch (error) {
    next(error);
  }
};

exports.filterIncomeByMonth = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const month = req.params.month;
    const income = await incomeService.getIncomeByMonth(userId, month);
    res.json(income);
  } catch (error) {
    next(error);
  }
};

exports.addIncomeForUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const incomeData = req.body;
    const dateObj = new Date(req.body.date);

    incomeData.financial_year = dateObj.getFullYear(); // 2023
    incomeData.month = dateObj.getMonth() + 1;
    const income = await incomeService.addIncome(userId, incomeData);
    res.status(201).json(income);
  } catch (error) {
    next(error);
  }
};
