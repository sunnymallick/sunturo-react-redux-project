'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Username cannot be an email address.');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [2, 3]
      },
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });
  User.associate = function(models) {
    // associations can be defined here
    // User.hasMany(models.Review, { foreignKey: 'userId' })
    User.hasMany(models.Review, { foreignKey: 'userId' })
    User.hasMany(models.Vehicle, { foreignKey: 'userId' })
  };
  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, username, email, age } = this; // context will be the User instance
    return { id, username, email, age };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
   };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
   };

  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ username, email, age, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      age,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };
  return User;
};
