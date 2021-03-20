// HUB TO ACCESS ALL MODELS
// example:

const User = require("./User");
const Team = require("./Team");
const Player = require("./Player");
const Goalies = require("./Goalies");

//User to Team association
User.hasOne(Team, {
  foreignKey: 'user_id'
});

Team.belongsTo(User, {
  foreignKey: 'user_id'
});

//Player to Team Associations

Team.hasMany(Player);

Player.belongsTo(Team, {
});

//Goalie associations
Team.hasOne(Goalies);

Goalies.belongsTo(Team);



module.exports = { User, Team, Player, Goalies };