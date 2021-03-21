const seedPlayers = require('./player-seed');
const seedUsers = require('./user-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- PLAYER DATA SEEDED -----\n');
  await seedPlayers();
  console.log('\n----- PLAYER DATA SEEDED -----\n');

  process.exit(0);
};

seedAll();