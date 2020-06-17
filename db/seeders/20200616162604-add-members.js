'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Members",
      [
        {
          userId: "1",
          eventId: "1",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "1",
          eventId: "2",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "1",
          eventId: "5",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "1",
          eventId: "8",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "1",
          eventId: "6",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "2",
          eventId: "1",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "2",
          eventId: "3",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "2",
          eventId: "4",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "2",
          eventId: "5",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "2",
          eventId: "7",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "2",
          eventId: "8",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "1",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "2",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "3",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "4",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "5",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "6",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "7",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "8",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "4",
          eventId: "1",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "4",
          eventId: "3",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "4",
          eventId: "5",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "4",
          eventId: "7",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "5",
          eventId: "2",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "5",
          eventId: "3",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "5",
          eventId: "4",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "5",
          eventId: "6",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "5",
          eventId: "8",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "6",
          eventId: "2",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "6",
          eventId: "3",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "6",
          eventId: "4",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "6",
          eventId: "5",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "6",
          eventId: "6",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "6",
          eventId: "7",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "6",
          eventId: "8",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
      ],
      { returning: true }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Members', null, {})
  }
};
