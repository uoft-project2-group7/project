const { User } = require('../models');

const userData = [
  {
    username: "terrence",
    email: "tchan@gmail.com",
    password: "banana"
  },
  {
    username: "frosty",
    email: "frosty@gmail.com",
    password: "banana"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;