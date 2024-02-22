const express = require("express");
const assetController = require("../controllers/assetController");
const router = express.Router();

router.get("/user/:userId", assetController.getAllAssetsOfUser);
router.post("/user/:userId", assetController.createAssetForUser);
router.put("/:assetId", assetController.updateAsset);
router.delete("/:assetId", assetController.deleteAsset);

module.exports = router;
