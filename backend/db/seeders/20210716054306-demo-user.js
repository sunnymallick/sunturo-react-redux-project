'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        age: 30
      },
      {
        email: 'sunny@sunny.com',
        username: 'sunny',
        hashedPassword: bcrypt.hashSync('sunnys'),
        age: 36
      },
      {
        email: 'younguser@younguser.com',
        username: 'younguser',
        hashedPassword: bcrypt.hashSync('younguser'),
        age: 19
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    // const Op = Sequelize.Op;
    // return queryInterface.bulkDelete('Users', {
    //   username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    // }, {});
    return queryInterface.bulkDelete('Users', null, {});
  }
};
