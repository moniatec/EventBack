'use strict';
const bcrypt = require("bcryptjs");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Demo User",
          email: "demoUser@demo.com",
          hashedPassword: bcrypt.hashSync('123'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Monia Techini',
          email: 'monia@test.com',
          hashedPassword: bcrypt.hashSync('123'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Cool user',
          email: 'cool@user.com',
          hashedPassword: bcrypt.hashSync('123'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Host',
          email: 'host@host.com',
          hashedPassword: bcrypt.hashSync('123'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'App academy',
          email: 'app@app.com',
          hashedPassword: bcrypt.hashSync('123'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Guest',
          email: 'guest@guest.com',
          hashedPassword: bcrypt.hashSync('123'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
