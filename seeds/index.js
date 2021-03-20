const seedPlayers = require('./player-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedPlayers();
  console.log('\n----- PLAYER DATA SEEDED -----\n');

  process.exit(0);
};

seedAll();