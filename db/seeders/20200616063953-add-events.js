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
          time: "07-10-2020",
          description: "Event hosted to celebrate summer days with musiv dance and much more...",
          photoUrl: "https://media.timeout.com/images/103160783/image.jpg",
          location: "New York, NY",
          hostId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventName: "Free Online Course",
          time: "06-28-2020",
          description: "Event hosted for parents to be trained how to make a system of positive reinforcement that is centered around your child's love language.",
          photoUrl: "https://ak7.picdn.net/shutterstock/videos/9462827/thumb/10.jpg",
          location: "Online",
          hostId: "5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventName: "Time for skincare",
          time: "07-15-2020",
          description: "It’s an educational online series for all the teenagers who struggle with their skin and want to learn how best to take care of it.",
          photoUrl: "https://i.ytimg.com/vi/zm-0NP40Xs8/maxresdefault.jpg",
          location: "Online",
          hostId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventName: "Storage Closet Organization",
          time: "07-15-2020",
          description: "join us to learn about the basics methods for storage items to organize your storage closets and pantries! ",
          photoUrl: "http://images.hayneedle.com/mgen/master:JEN398.jpg",
          location: "Online",
          hostId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventName: "Reduce Teen Stress",
          time: "07-06-2020",
          description: "Learn about triggers for mood disorders in teens and what signs and symptoms caregivers and treatment providers should look for. ",
          photoUrl: "https://i.ytimg.com/vi/lnXrXX0m-NE/maxresdefault.jpg",
          location: "Online",
          hostId: "2",
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
