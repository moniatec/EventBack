'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Events",
      [
        {
          eventName: "BLM",
          time: "06-29-2020",
          description: "Event hosted in order to advocate against police violence towards black people",
          photoUrl: "https://www.benjerry.com/files/live/sites/systemsite/files/whats-new/4237-black-lives-matter/BLM-solid-1200x630.png",
          location: "Tampa, FL",
          hostId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventName: "Best taste",
          time: "06-25-2020",
          description: "Event hosted to get people try different kinds of food from all ove the world ",
          photoUrl: "http://i.ndtvimg.com/i/2016-10/food-festival-620_620x350_41476787718.jpg",
          location: "Miami, FL",
          hostId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventName: "Lets bake to gether!",
          time: "07-20-2020",
          description: "Everybody invited to bake with us very delicious dishes ",
          photoUrl: "https://img2.10bestmedia.com/Images/Photos/231262/Harvest-festival-Branson_54_990x660_201406010107.jpg",
          location: "New York, NY",
          hostId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventName: "Music for Life",
          time: "07-0-2020",
          description: "Event gosted to celebrate summer days with musiv dance and much more...",
          photoUrl: "https://media.timeout.com/images/103160783/image.jpg",
          location: "New York, NY",
          hostId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {})
  }
};
