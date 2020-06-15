'use strict';
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    checkedIn: DataTypes.BOOLEAN
  }, {});
  Member.associate = function(models) {
    // associations can be defined here
  };
  return Member;
};