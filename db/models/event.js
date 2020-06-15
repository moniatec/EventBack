'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    eventName: { type: DataTypes.STRING, allowNull: false, unique: true },
    time: { type: DataTypes.DATE, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    photoUrl: { type: DataTypes.TEXT, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    hostId: { type: DataTypes.INTEGER, allowNull: false },
  }, {});
  Event.associate = function (models) {
    Event.belongsToMany(models.User, {
      through: "Members",
      foreignKey: "eventId",
      otherKey: "userId"
    });
    Event.belongsTo(models.User, {
      as: "host",
      foreignKey: "hostId",
    });
  };
  return Event;
};