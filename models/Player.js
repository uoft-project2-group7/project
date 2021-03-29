const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Player extends Model {}

Player.init(
  {
    //NHL_ID is the player identifier used to by the NHL API to pull player info
    nhl_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
            
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    stat1: { //for players this will represent goals, for a goalie it will be wins
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    stat2: { //for players this is assists, for a goalie it saves
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    stat3: { //for a player this will always be zero and never referenced, for a goalie it is goals against
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    stat4: { //for a player always zero and never referenced, for a goalie this is shutouts
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }   
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'player'
  }
);

module.exports = Player;