const express = require("express");
const incomeController = require("../controllers/incomeController");
const router = express.Router();

router.get(
  "/user/:userId/current-year",
  incomeController.fetchCurrentYearIncome
);
router.get("/user/:userId/year/:year", incomeController.filterIncomeByYear);
router.get("/user/:userId/month/:month", incomeController.filterIncomeByMonth);
router.post("/user/:userId", incomeController.addIncomeForUser);

module.exports = router;
