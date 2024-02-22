// Example: Using Sequelize
const db = require("../models/index");
const Asset = db.Asset;

exports.getAllAssetsOfUser = async (userId) => {
  try {
    const assets = await Asset.findAll({ where: { userId } });
    return assets;
  } catch (error) {
    throw new Error("Error fetching assets for user");
  }
};

exports.createAssetForUser = async (userId, assetData) => {
  try {
    assetData.userId = userId;
    const asset = await Asset.create(assetData);
    return asset;
  } catch (error) {
    throw new Error("Error creating asset for user");
  }
};

exports.updateAsset = async (assetId, assetData) => {
  try {
    const asset = await Asset.findByPk(assetId);
    if (!asset) {
      throw new Error("Asset not found");
    }

    await asset.update(assetData);
    return asset; // Return updated asset
  } catch (error) {
    if (error.message === "Asset not found") {
      throw error;
    }
    throw new Error("Error updating asset");
  }
};

exports.deleteAsset = async (assetId) => {
  try {
    const asset = await Asset.findByPk(assetId);
    if (!asset) {
      throw new Error("Asset not found");
    }

    await asset.destroy();
  } catch (error) {
    if (error.message === "Asset not found") {
      throw error;
    }
    throw new Error("Error deleting asset");
  }
};
