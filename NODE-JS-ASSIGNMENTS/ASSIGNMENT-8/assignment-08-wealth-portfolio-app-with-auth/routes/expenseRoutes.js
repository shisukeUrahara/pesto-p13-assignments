const express = require("express");
const expenseController = require("../controllers/expenseController");
const auth = require("../middlewares/authMiddleware");
const router = express.Router();

router.get(
  "/user/:userId/current-year",
  auth,
  expenseController.fetchCurrentYearExpense
);
router.get(
  "/user/:userId/year/:year",
  auth,
  expenseController.filterExpensesByYear
);
router.get(
  "/user/:userId/month/:month",
  auth,
  expenseController.filterExpensesByMonth
);
router.post("/user/:userId", auth, expenseController.addExpenseForUser);

module.exports = router;
