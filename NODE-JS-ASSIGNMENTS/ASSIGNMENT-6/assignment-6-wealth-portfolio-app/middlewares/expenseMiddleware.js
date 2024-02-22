const validateExpenseFilters = (req, res, next) => {
  const { year, month } = req.query;
  if (year && isNaN(year)) {
    return res.status(400).json({ message: "Year should be a number." });
  }
  if (month && (isNaN(month) || month < 1 || month > 12)) {
    return res
      .status(400)
      .json({ message: "Month should be a number between 1 and 12." });
  }
  next();
};

module.exports = {
  validateExpenseFilters,
};
