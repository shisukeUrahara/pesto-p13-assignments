const express = require("express");
const financeController = require("../controllers/financeController");
const auth = require("../middlewares/authMiddleware");
const router = express.Router();

router.get(
  "/details/user/:userId",
  auth,
  financeController.fetchDetailedBreakdown
);
router.get(
  "/details/user/:userId/year/:year",
  auth,
  financeController.filterBreakdownByYear
);
router.get(
  "/details/user/:userId/month/:month",
  auth,
  financeController.filterBreakdownByMonth
);

module.exports = router;
