const savingsService = require("../services/savingsService");

exports.fetchCurrentYearSavings = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const savings = await savingsService.getCurrentYearSavings(userId);
    res.json(savings);
  } catch (error) {
    next(error);
  }
};

exports.filterSavingsByYear = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const year = req.params.year;
    const savings = await savingsService.getSavingsByYear(userId, year);
    res.json(savings);
  } catch (error) {
    next(error);
  }
};

exports.filterSavingsByMonth = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const month = req.params.month;
    const savings = await savingsService.getSavingsByMonth(userId, month);
    res.json(savings);
  } catch (error) {
    next(error);
  }
};

exports.addSavingsForUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const savingsData = req.body;
    const dateObj = new Date(req.body.date);
    // console.log("**@ dateObj is , ", dateObj);

    savingsData.financial_year = dateObj.getFullYear(); // 2023
    savingsData.month = dateObj.getMonth() + 1;
    // console.log("**@ savings data is , ", savingsData);

    const savings = await savingsService.addSavings(userId, savingsData);
    res.status(201).json(savings);
  } catch (error) {
    next(error);
  }
};
