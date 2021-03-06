// HUB TO ACCESS ALL MODELS

const User = require("./User");
const Team = require("./Team");
const Player = require("./Player");
const TeamPlayers = require("./TeamPlayers");

//User has one Team association
User.hasOne(Team, {
  foreignKey: "user_id",
});

Team.belongsTo(User, {
  foreignKey: "user_id",
});


//Teams have many Players Association

Team.belongsToMany(Player, {
  through: TeamPlayers,
  foreignKey: "team_id",
});

Player.belongsToMany(Team, {
  through: TeamPlayers,
  foreignKey: "player_id",
});

TeamPlayers.belongsTo(Team, {
  foreignKey: "team_id",
});
TeamPlayers.belongsTo(Player, {
  foreignKey: "player_id",
});
Player.hasMany(TeamPlayers, {
  foreignKey: "player_id",
});
Team.hasMany(TeamPlayers, {
  foreignKey: "team_id",
});

module.exports = { User, Team, Player, TeamPlayers };
