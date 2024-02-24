exports.handleError = (err, req, res, next) => {
  console.error(err.stack);
  if (err.message === "User not found" || err.message === "Asset not found") {
    res.status(404).json({ error: err.message });
  } else {
    res.status(500).json({ error: "Something went wrong!" });
  }
};
