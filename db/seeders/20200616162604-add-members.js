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
          eventId: "3",
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
          eventId: "6",
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
          eventId: "5",
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
        {
          userId: "4",
          eventId: "9",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "1",
          eventId: "9",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "9",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "5",
          eventId: "9",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "4",
          eventId: "10",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "1",
          eventId: "10",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "2",
          eventId: "10",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "10",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "5",
          eventId: "10",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "6",
          eventId: "10",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "4",
          eventId: "11",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "2",
          eventId: "11",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "11",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "5",
          eventId: "11",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "5",
          eventId: "12",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "1",
          eventId: "12",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "2",
          eventId: "12",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "5",
          eventId: "13",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "13",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "6",
          eventId: "13",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "14",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "1",
          eventId: "14",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "2",
          eventId: "14",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "4",
          eventId: "14",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "6",
          eventId: "14",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "15",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "1",
          eventId: "15",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "2",
          eventId: "15",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "4",
          eventId: "15",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "6",
          eventId: "15",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "4",
          eventId: "16",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "1",
          eventId: "16",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "2",
          eventId: "16",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "16",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "5",
          eventId: "16",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "6",
          eventId: "16",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "5",
          eventId: "17",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "2",
          eventId: "17",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "17",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "4",
          eventId: "17",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "6",
          eventId: "17",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "18",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "1",
          eventId: "18",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "2",
          eventId: "18",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "4",
          eventId: "18",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "6",
          eventId: "18",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "6",
          eventId: "19",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "5",
          eventId: "19",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "1",
          eventId: "19",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "2",
          eventId: "19",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "19",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "4",
          eventId: "19",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "1",
          eventId: "20",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "2",
          eventId: "20",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "3",
          eventId: "20",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "4",
          eventId: "20",
          checkedIn: false,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "5",
          eventId: "20",
          checkedIn: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: "6",
          eventId: "20",
          checkedIn: false,
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
