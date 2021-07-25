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
      price: 99.00,
      lat: 40.7608,
      lng: 111.8910,
      description: "You may think that this is just an ordinary Camry, but it is so much more than that! With a powerful 3.5-liter V6 and over 300hp, you'll have plenty of fun in this family cruiser.",
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
       price: 149.00,
       lat: 40.7608,
       lng: 111.8910,
       description: "If you've ever felt like cruising around some sand-dunes or rock crawling up a gnarly trail, this is the truck for you!",
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
       price: 29.00,
       lat: 40.7608,
       lng: 111.8910,
       description: 'This baby will outlast you, your kids, your grandkids, your great-grandkids and even your great-great-grandkids!',
       createdAt: new Date(),
       updatedAt: new Date()
      },
     {
       userId: 2,
       year: '2006',
       make: 'Lamborghini',
       model: 'Gallardo',
       type: 'Super',
       ageRestriction: true,
       price: 299.00,
       lat: 40.7608,
       lng: 111.8910,
       description: `25+ only. If you've ever wanted to live out your dream of jumping up in your Lamborghini Gallardo, you can! Just know that any damages to the leather or upholstory is subject to a $500 fine.`,
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
       price: 149.00,
       lat: 40.7608,
       lng: 111.8910,
       description: 'Here is my Ford Focus ST that you can book! Even comes with a crackle tune so you can give your neighbors another reason to hate you! Respect the high booking price, I know what I have. *Comes with a free vape with every rental',
       createdAt: new Date(),
       updatedAt: new Date()
      },
     {
       userId: 2,
       year: '2017',
       make: 'Tesla',
       model: 'Model S',
       type: 'Luxury',
       ageRestriction: true,
       price: 139.00,
       lat: 40.7608,
       lng: 111.8910,
       description: "25+ only. I'm fast. I'm very fast. If you can handle all of the instant electric torque, this Tesla Model S is perfect for you and it is available for booking!",
       createdAt: new Date(),
       updatedAt: new Date()
      },
     {
       userId: 2,
       year: '2017',
       make: 'Lamborghini',
       model: 'Huracan',
       type: 'Super',
       ageRestriction: true,
       price: 299.00,
       lat: 40.7608,
       lng: 111.8910,
       description: "25+ only. The exhaust note alone sells this car. The attention isn't half bad either.",
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       userId: 2,
       year: '2013',
       make: 'Nissan',
       model: 'GT-R',
       type: 'Sports',
       ageRestriction: true,
       price: 249.00,
       lat: 40.7608,
       lng: 111.8910,
       description: "25+ only. Let's get this straight, it is a fast appliance with two turbos. If you don't care much for emotions, but care for just straight line speed and trumpet exhausts, this car is perfect for you to book!",
       createdAt: new Date(),
       updatedAt: new Date()
      },
     {
       userId: 2,
       year: '2017',
       make: 'Porsche',
       model: '911 Turbo S',
       type: 'Super',
       ageRestriction: true,
       price: 349.00,
       lat: 40.7608,
       lng: 111.8910,
       description: "25+ only. Is this air-cooled? Nope. But it does go over 200mph so there's that. That being said, I have installed a tracking device that measures speed :D.",
       createdAt: new Date(),
       updatedAt: new Date()
      },
     {
       userId: 2,
       year: '2013',
       make: 'Ford',
       model: 'Mustang GT',
       type: 'Sports',
       ageRestriction: false,
       price: 89.00,
       lat: 40.7608,
       lng: 111.8910,
       description: "*CROWD KILLER ALERT, CROWD KILLER ALERT. Hopefully you know how to drive a stick.",
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       userId: 2,
       year: '2020',
       make: 'Chevrolet',
       model: 'Corvette',
       type: 'Sports',
       ageRestriction: true,
       price: 199.00,
       lat: 40.7608,
       lng: 111.8910,
       description: "25+ only. 'Murica.",
       createdAt: new Date(),
       updatedAt: new Date()
      },
     {
       userId: 2,
       year: '2010',
       make: 'BMW',
       model: 'M3',
       type: 'Sports',
       ageRestriction: true,
       price: 199.00,
       lat: 40.7608,
       lng: 111.8910,
       description: "25+ only. Just know, I require a $1000 deposit for this beast. Don't worry about all the warning lights, that just means that they work. If you notice an oil leak, that just means that it has oil in it.",
       createdAt: new Date(),
       updatedAt: new Date()
      },
     {
       userId: 2,
       year: '2012',
       make: 'Audi',
       model: 'R8',
       type: 'Sports',
       ageRestriction: true,
       price: 199.00,
       lat: 40.7608,
       lng: 111.8910,
       description: "25+ only. Live out your Iron Man dreams with this beauty of an Audi R8 V10. *Iron Man suit not included.",
       createdAt: new Date(),
       updatedAt: new Date()
      },
     {
       userId: 2,
       year: '2008',
       make: 'Honda',
       model: 'Civic',
       type: 'Sedan',
       ageRestriction: false,
       price: 69.00,
       lat: 40.7608,
       lng: 111.8910,
       description: "The Beach Boys basically have a song about this car. Except that song was about a motorcycle... it still counts!",
       createdAt: new Date(),
       updatedAt: new Date()
      },
     {
       userId: 2,
       year: '2016',
       make: 'Mazda',
       model: 'MX-5 Miata',
       type: 'Convertible',
       ageRestriction: false,
       price: 89.00,
       lat: 40.7608,
       lng: 111.8910,
       description: "If you ignore the fact that Fiat makes a car with this same chassis but that one has a turbocharger and also ignore that Honda beat us at this game years ago, this is a fantastic car to book!",
       createdAt: new Date(),
       updatedAt: new Date()
      },
     {
       userId: 2,
       year: '2012',
       make: 'Dodge',
       model: 'Challenger',
       type: 'Sports',
       ageRestriction: false,
       price: 119.00,
       lat: 40.7608,
       lng: 111.8910,
       description: "If you've ever wanted to drive a boat on land, this is perfect for you! This has a 5.7-liter V8 that feels like a struggling V6 due to the heftly weight of the chassis.",
       createdAt: new Date(),
       updatedAt: new Date()
      },
     {
       userId: 2,
       year: '2005',
       make: 'Honda',
       model: 'Odyssey',
       type: 'Minivan',
       ageRestriction: false,
       price: 89.00,
       lat: 40.7608,
       lng: 111.8910,
       description: "Perfect for hauling all your buddies down to the lake and back. That is until the transmission dies cause its an old Honda. But don't worry about that!",
       createdAt: new Date(),
       updatedAt: new Date()
      },
     {
       userId: 2,
       year: '2014',
       make: 'Jeep',
       model: 'Wrangler',
       type: 'Truck',
       ageRestriction: false,
       price: 129.00,
       lat: 40.7608,
       lng: 111.8910,
       description: "Climbing, muddin and convertible top views. What more would you want?",
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
