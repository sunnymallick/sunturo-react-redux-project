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
      vehicleImg: 'https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/2020+Toyota+Camry/DSC03521.jpg',
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
       description: "Climbin, haulin, muddin, MORE CLIMBIN!!! If you've ever felt like cruising around some sand-dunes or rock crawling up a gnarly trail, this is the truck for you!",
       vehicleImg: 'https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/2019+Toyota+Tacoma/DSC06620+2.JPG',
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
       vehicleImg: 'https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/1999+Toyota+Corolla/1998_toyota_corolla_sedan_le_fq_oem_2_500.webp',
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
       vehicleImg: 'https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/2006+Lamborghini+Gallardo/2006_lamborghini_gallardo_coupe_base_fq_oem_1_500.webp',
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
       vehicleImg: 'https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/2017+Ford+Focus/DSC02744-Edit.jpg',
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
       vehicleImg: 'https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/2017+Tesla+Model+S/DSC06798.jpg',
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
       vehicleImg: 'https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/2017+Lamborghini+Huracan/2017-lamborghini-huracan-performante-first-drive.jpeg',
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
       vehicleImg: 'https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/2013+Nissan+GT-R/106867_2013_Nissan_GT-R.jpeg',
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
       vehicleImg: 'https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/2017+Porsche+911+Turbo+S/Silver-Arrow-Cars-Porsche-911-Turbo-S-8.jpeg',
       createdAt: new Date(),
       updatedAt: new Date()
      },
     {
       userId: 2,
       year: '2016',
       make: 'Ford',
       model: 'Mustang GT',
       type: 'Sports',
       ageRestriction: false,
       price: 99.00,
       lat: 40.7608,
       lng: 111.8910,
       description: "*CROWD KILLER ALERT, CROWD KILLER ALERT. Hopefully you know how to drive a stick.",
       vehicleImg: 'https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/2016+Ford+Mustang+GT/DSC05198-Edit.jpg',
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
       vehicleImg: 'https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/2020+Chevrolet+Corvette/2020-Chevrolet-Corvette-Coupe-MotorTrend-Car-of-the-Year-40.jpeg',
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
       vehicleImg: 'https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/2010+BMW+M3/2968506.jpeg',
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
       vehicleImg: 'https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/2012+Audi+R8/whiteaudir8.webp',
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
       vehicleImg: 'https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/2008+Honda+Civic/2008_honda_civic_1590191693f0d6c519f6b34c9898DSC001332199.jpeg',
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
       vehicleImg: 'https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/2016+Mazda+MX-5+Miata/2016_mazda_mx-5_miata_1626733388202584e53117b00DH__7846-scaled.jpeg',
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
       vehicleImg: 'https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/2012+Dodge+Challenger/2012-dodge-challenger-SRT8-392-front-left-view1.jpeg',
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
       vehicleImg: 'https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/2005+Honda+Odyssey/2005-Honda-Odyssey-FrontSide_HTODY051_505x375.jpeg',
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
       vehicleImg: 'https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/2014+Jeep+Wrangler/DSC06758.jpg',
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
