const express = require("express");
const savingsController = require("../controllers/savingsController");
const auth = require("../middlewares/authMiddleware");
const router = express.Router();

router.get(
  "/user/:userId/current-year",
  auth,
  savingsController.fetchCurrentYearSavings
);
router.get(
  "/user/:userId/year/:year",
  auth,
  savingsController.filterSavingsByYear
);
router.get(
  "/user/:userId/month/:month",
  auth,
  savingsController.filterSavingsByMonth
);
router.post("/user/:userId", auth, savingsController.addSavingsForUser);

module.exports = router;
