/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Answers = sequelize.define("answers", {
    user_name: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    person_type: DataTypes.STRING,
    answer: DataTypes.BOOLEAN,
    questionID: DataTypes.INTEGER
  });
  return Answers;
};
