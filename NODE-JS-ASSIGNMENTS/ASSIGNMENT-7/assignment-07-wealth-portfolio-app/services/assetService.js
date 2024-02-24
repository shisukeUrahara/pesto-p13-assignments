const Asset = require("../models/asset");
exports.getAllAssetsOfUser = async (userId) => {
  try {
    const assets = await Asset.find({ userId });
    return assets;
  } catch (error) {
    throw new Error("Error fetching assets for user");
  }
};

exports.createAssetForUser = async (userId, assetData) => {
  try {
    // console.log("**@ createAssetForUser called with userId , ", userId);
    // console.log("**@ createAssetForUser called with assetData , ", assetData);

    const asset = new Asset({ userId, ...assetData });
    await asset.save();
    return asset;
  } catch (error) {
    throw new Error("Error creating asset for user");
  }
};

exports.updateAsset = async (assetId, assetData) => {
  try {
    const asset = await Asset.findById(assetId);
    if (!asset) {
      throw new Error("Asset not found");
    }

    Object.assign(asset, assetData);
    await asset.save();
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
    const asset = await Asset.findById(assetId);
    // console.log("**@ the asset to be deleted is , ", asset);
    if (!asset) {
      throw new Error("Asset not found");
    }

    await asset.deleteOne();
  } catch (error) {
    if (error.message === "Asset not found") {
      throw error;
    }
    // console.log("**@ error deleting asset , error is , ", error);
    throw new Error("Error deleting asset");
  }
};
