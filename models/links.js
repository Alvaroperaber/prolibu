"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class links extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.users, { foreignKey: "user_fk" });
    }
  }
  links.init(
    {
      oportunidadId: DataTypes.STRING,
      link1: DataTypes.STRING,
      link2: DataTypes.STRING,
      link3: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "links",
    }
  );
  return links;
};
