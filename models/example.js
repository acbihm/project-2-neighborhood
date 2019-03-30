module.exports = function(sequelize, DataTypes) {
  var Examples = sequelize.define("Examples", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Examples;
};
