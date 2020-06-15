'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },
    avatarUrl: {
      type: DataTypes.TEXT,

    }
  }, {});
  User.associate = function (models) {
    User.belongsToMany(models.Event, {
      through: "Members",
      foreignKey: "userId",
      otherKey: "eventId"
    });
    User.hasMany(models.Event, {
      as: "events",
      foreignKey: "hostId",
    });
  };

  User.prototype.validatePassword = function (password) {
    // because this is a model instance method, `this` is the user instance here:
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  return User;
};