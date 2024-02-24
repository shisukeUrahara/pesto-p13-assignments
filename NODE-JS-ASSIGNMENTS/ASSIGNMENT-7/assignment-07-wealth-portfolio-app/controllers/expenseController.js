const expenseService = require("../services/expenseService");

exports.fetchCurrentYearExpense = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const expenses = await expenseService.getCurrentYearExpense(userId);
    res.json(expenses);
  } catch (error) {
    next(error);
  }
};

exports.filterExpensesByYear = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const year = req.params.year;
    const expenses = await expenseService.getExpensesByYear(userId, year);
    res.json(expenses);
  } catch (error) {
    next(error);
  }
};

exports.filterExpensesByMonth = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const month = req.params.month;
    const expenses = await expenseService.getExpensesByMonth(userId, month);
    res.json(expenses);
  } catch (error) {
    next(error);
  }
};

exports.addExpenseForUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const expenseData = req.body;
    const dateObj = new Date(req.body.date);
    // console.log("**@ dateObj is , ", dateObj);
    // console.log("**@ userId is , ", userId);

    expenseData.financial_year = dateObj.getFullYear(); // 2023
    expenseData.month = dateObj.getMonth() + 1;
    // console.log("**@ expenseData data is , ", expenseData);
    const expense = await expenseService.addExpense(userId, expenseData);
    res.status(201).json(expense);
  } catch (error) {
    next(error);
  }
};
