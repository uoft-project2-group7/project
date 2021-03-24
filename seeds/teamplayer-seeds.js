const { TeamPlayers } = require('../models');

const TPData = [
  {
    team_id: 1,
    player_id: 1
  },
  {
    team_id: 1,
    player_id: 8
  },
  {
    team_id: 1,
    player_id: 13
  },
  {
    team_id: 1,
    player_id: 19
  },
  {
    team_id: 1,
    player_id: 20
  },
  {
    team_id: 1,
    player_id: 27
  },
  {
    team_id: 2,
    player_id: 3
  },
  {
    team_id: 2,
    player_id: 6
  },
  {
    team_id: 2,
    player_id: 12
  },
  {
    team_id: 2,
    player_id: 17
  },
  {
    team_id: 2,
    player_id: 28
  },
  {
    team_id: 3,
    player_id: 4
  },
  {
    team_id: 3,
    player_id: 7
  },
  {
    team_id: 3,
    player_id: 11
  },
  {
    team_id: 3,
    player_id: 16
  },
  {
    team_id: 3,
    player_id: 22
  },
  {
    team_id: 3,
    player_id: 29
  }
]

const seedTeamPlayers = () => TeamPlayers.bulkCreate(TPData);

module.exports = seedTeamPlayers;