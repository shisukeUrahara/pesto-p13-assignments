const express = require("express");
const incomeController = require("../controllers/incomeController");
const auth = require("../middlewares/authMiddleware");
const router = express.Router();

router.get(
  "/user/:userId/current-year",
  auth,
  incomeController.fetchCurrentYearIncome
);
router.get(
  "/user/:userId/year/:year",
  auth,
  incomeController.filterIncomeByYear
);
router.get(
  "/user/:userId/month/:month",
  auth,
  incomeController.filterIncomeByMonth
);
router.post("/user/:userId", auth, incomeController.addIncomeForUser);

module.exports = router;
