const { TeamPlayers } = require('../models');

const TPData = [
  {
    team_id: 1,
    player_id: 8478402
  },
  {
    team_id: 1,
    player_id: 8475913
  },
  {
    team_id: 1,
    player_id: 8477940
  },
  {
    team_id: 1,
    player_id: 8474590
  },
  {
    team_id: 1,
    player_id: 8480800
  },
  {
    team_id: 1,
    player_id: 8475831
  },
  {
    team_id: 2,
    player_id: 8476460
  },
  {
    team_id: 2,
    player_id: 8474141
  },
  {
    team_id: 2,
    player_id: 8473419
  },
  {
    team_id: 2,
    player_id: 8475197
  },
  {
    team_id: 2,
    player_id: 8474563
  },
  {
    team_id: 2,
    player_id: 8470594
  },
  {
    team_id: 3,
    player_id: 8479318
  },
  {
    team_id: 3,
    player_id: 8478483
  },
  {
    team_id: 3,
    player_id: 8476456
  },
  {
    team_id: 3,
    player_id: 8475197
  },
  {
    team_id: 3,
    player_id: 8476853
  },
  {
    team_id: 3,
    player_id: 8473575
  }  
]

const seedTeamPlayers = () => TeamPlayers.bulkCreate(TPData);

module.exports = seedTeamPlayers;