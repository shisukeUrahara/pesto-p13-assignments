const express = require("express");
const expenseController = require("../controllers/expenseController");
const router = express.Router();

router.get(
  "/user/:userId/current-year",
  expenseController.fetchCurrentYearExpense
);
router.get("/user/:userId/year/:year", expenseController.filterExpensesByYear);
router.get(
  "/user/:userId/month/:month",
  expenseController.filterExpensesByMonth
);
router.post("/user/:userId", expenseController.addExpenseForUser);

module.exports = router;
