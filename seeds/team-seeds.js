const { Team } = require('../models');

const teamData = [
  {
    team_name: 'Terrences Terrors',
    center: 1,
    right_wing: 8,
    left_wing: 13,
    dman1: 19,
    dman2: 20,
    goalie: 27,
    user_id: 1
  },
  {
    team_name: 'Frosty Fighters',
    center: 3,
    right_wing: 6,
    left_wing: 12,
    dman1: 21,
    dman2: 17,
    goalie: 28,
    user_id: 2
  },
  {
    team_name: 'Knuckle Draggers',
    center: 4,
    right_wing: 7,
    left_wing: 11,
    dman1: 16,
    dman2: 22,
    goalie: 29,
    user_id: 3
  },
]

const seedTeams= () => Team.bulkCreate(teamData);

module.export = seedTeams;