const { Team } = require('../models');

const teamData = [
  {
    team_name: 'Terrences Terrors',
    center: 8478402,
    right_wing: 8475913,
    left_wing: 8477940,
    dman1: 8474590,
    dman2: 8480800,
    goalie: 8475831,
    user_id: 1
  },
  {
    team_name: 'Frosty Fighters',
    center: 8476460,
    right_wing: 8474141,
    left_wing: 8473419,
    dman1: 8475197,
    dman2: 8474563,
    goalie: 8470594,
    user_id: 2
  },
  {
    team_name: 'Knuckle Draggers',
    center: 8479318,
    right_wing: 8478483,
    left_wing: 8476456,
    dman1: 8475197,
    dman2: 8476853,
    goalie: 8473575,
    user_id: 3
  },
]

const seedTeams= () => Team.bulkCreate(teamData);

module.exports = seedTeams;