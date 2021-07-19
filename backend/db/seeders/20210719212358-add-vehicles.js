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
