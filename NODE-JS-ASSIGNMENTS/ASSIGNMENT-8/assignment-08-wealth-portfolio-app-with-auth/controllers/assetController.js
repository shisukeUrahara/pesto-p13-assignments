const assetService = require("../services/assetService");

exports.getAllAssetsOfUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const assets = await assetService.getAllAssetsOfUser(userId);

    res.json(assets);
  } catch (error) {
    next(error);
  }
};

exports.createAssetForUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const asset = await assetService.createAssetForUser(userId, req.body);
    res.status(201).json(asset);
  } catch (error) {
    next(error);
  }
};

exports.updateAsset = async (req, res, next) => {
  try {
    const assetId = req.params.assetId;
    const updatedAsset = await assetService.updateAsset(assetId, req.body);
    if (!updatedAsset) {
      return res.status(404).json({ message: "Asset not found" });
    }
    res.json(updatedAsset);
  } catch (error) {
    next(error);
  }
};

exports.deleteAsset = async (req, res, next) => {
  try {
    const assetId = req.params.assetId;
    const result = await assetService.deleteAsset(assetId);

    res.status(204).send({ message: "Asset deleted" });
  } catch (error) {
    next(error);
  }
};
