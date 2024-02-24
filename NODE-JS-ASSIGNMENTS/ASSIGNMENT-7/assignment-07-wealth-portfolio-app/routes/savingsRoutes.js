const express = require("express");
const savingsController = require("../controllers/savingsController");
const router = express.Router();

router.get(
  "/user/:userId/current-year",
  savingsController.fetchCurrentYearSavings
);
router.get("/user/:userId/year/:year", savingsController.filterSavingsByYear);
router.get(
  "/user/:userId/month/:month",
  savingsController.filterSavingsByMonth
);
router.post("/user/:userId", savingsController.addSavingsForUser);

module.exports = router;
