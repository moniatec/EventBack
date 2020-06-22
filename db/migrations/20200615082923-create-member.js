'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users", key: "id", }
      },
      eventId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Events", key: "id", }
      },
      checkedIn: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: "False"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => queryInterface.addConstraint('Members', ['userId', 'eventId'], {
      type: 'unique',
      name: 'composite_key_name'
    }));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Members');
  }
};