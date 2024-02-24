const validateAssetInput = (req, res, next) => {
  const { type, value } = req.body;
  if (!type || typeof value !== "number") {
    return res
      .status(400)
      .json({
        message:
          "Type and value are required fields and value should be a number.",
      });
  }
  next();
};

module.exports = {
  validateAssetInput,
};
