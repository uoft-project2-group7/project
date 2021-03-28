const seedPlayers = require('./player-seed');
const seedUsers = require('./user-seed');
const seedTeams = require('./team-seeds');
const seedTeamPlayers = require('./teamplayer-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- PLAYER DATA SEEDED -----\n');
  await seedPlayers();
  console.log('\n----- USER DATA SEEDED -----\n');
  await seedTeams();
  console.log('\n----- TEAM DATA SEEDED -----\n');
  await seedTeamPlayers();
  console.log('\n----- TEAMPLAYERS DATA SEEDED -----\n');

  process.exit(0);
};

seedAll();