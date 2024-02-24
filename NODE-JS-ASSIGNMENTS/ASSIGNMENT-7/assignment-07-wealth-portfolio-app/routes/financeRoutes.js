const express = require("express");
const financeController = require("../controllers/financeController");
const router = express.Router();

router.get("/details/user/:userId", financeController.fetchDetailedBreakdown);
router.get(
  "/details/user/:userId/year/:year",
  financeController.filterBreakdownByYear
);
router.get(
  "/details/user/:userId/month/:month",
  financeController.filterBreakdownByMonth
);

module.exports = router;
