const express = require("express");
const assetController = require("../controllers/assetController");
const auth = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/user/:userId", auth, assetController.getAllAssetsOfUser);
router.post("/user/:userId", auth, assetController.createAssetForUser);
router.put("/:assetId", auth, assetController.updateAsset);
router.delete("/:assetId", auth, assetController.deleteAsset);

module.exports = router;
