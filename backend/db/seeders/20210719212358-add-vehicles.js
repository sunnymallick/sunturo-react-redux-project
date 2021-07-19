'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Vehicles', [
    {
     userId: 2,
     year: '2020',
     make: 'Toyota',
     model: 'Camry',
     type: 'Sedan',
     ageRestriction: false,
     price: 100.00,
     lat: 40.7608,
     lng: 111.8910,
     description: 'Here is my Toyota Camry up to book!',
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      userId: 2,
      year: '2019',
      make: 'Toyota',
      model: 'Tacoma',
      type: 'Truck',
      ageRestriction: false,
      price: 150.00,
      lat: 40.7608,
      lng: 111.8910,
      description: 'Here is my Toyota Tacoma that you can book!',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 2,
      year: '1999',
      make: 'Toyota',
      model: 'Corolla',
      type: 'Sedan',
      ageRestriction: false,
      price: 50.00,
      lat: 40.7608,
      lng: 111.8910,
      description: 'Here is my Toyota Corolla that you can book! This baby will outlast you, your kids, your grandkids, your great-grandkids and even your great-great-grandkids!',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 2,
      year: '1999',
      make: 'Toyota',
      model: 'Corolla',
      type: 'Sedan',
      ageRestriction: false,
      price: 50.00,
      lat: 40.7608,
      lng: 111.8910,
      description: 'Here is my Toyota Corolla that you can book! This baby will outlast you, your kids, your grandkids, your great-grandkids and even your great-great-grandkids!',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 2,
      year: '2006',
      make: 'Lamborghini',
      model: 'Gallardo',
      type: 'Luxury',
      ageRestriction: true,
      price: 299.00,
      lat: 40.7608,
      lng: 111.8910,
      description: `Here is my Lamborghini Gallardo that you can book! 25+ only. If you've ever wanted to live out your dream of jumping up in your Lamborghini Gallardo, you can! Just know that any damages to the leather or upholstory is subject to a $500 fine.`,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 2,
      year: '2017',
      make: 'Ford',
      model: 'Focus',
      type: 'Hatchback',
      ageRestriction: false,
      price: 150.00,
      lat: 40.7608,
      lng: 111.8910,
      description: 'Here is my Ford Focus ST that you can book! Even comes with a crackle tune so you can give your neighbors another reason to hate you! Respect the high booking price, I know what I have.',
      createdAt: new Date(),
      updatedAt: new Date()
     },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Vehicles', null, {});
  }
};
