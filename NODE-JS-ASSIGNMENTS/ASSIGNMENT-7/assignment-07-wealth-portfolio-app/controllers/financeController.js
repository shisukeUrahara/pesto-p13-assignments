const financeService = require("../services/financeService");

exports.fetchDetailedBreakdown = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const details = await financeService.getDetailedBreakdown(userId);
    res.json(details);
  } catch (error) {
    next(error);
  }
};

exports.filterBreakdownByYear = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const year = req.params.year;
    const details = await financeService.getBreakdownByYear(userId, year);
    res.json(details);
  } catch (error) {
    next(error);
  }
};

exports.filterBreakdownByMonth = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const month = req.params.month;
    const details = await financeService.getBreakdownByMonth(userId, month);
    res.json(details);
  } catch (error) {
    next(error);
  }
};
