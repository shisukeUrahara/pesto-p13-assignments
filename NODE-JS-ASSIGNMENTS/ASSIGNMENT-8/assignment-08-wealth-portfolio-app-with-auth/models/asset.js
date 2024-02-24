const User = require("./user");

module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define("Asset", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.ENUM("Equity", "Fixed Income", "Alternatives"),
      allowNull: false,
    },
    value: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  });

  Asset.associate = (models) => {
    Asset.belongsTo(models.User);
  };

  return Asset;
};
