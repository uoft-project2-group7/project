const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Player extends Model {}

Player.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //NHL_ID is the player identifier used to by the NHL API to pull player info
    nhl_id: {
      type: DataTypes.INTEGER,
      allowNull: false      
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position: {
      type: DataTypes.STRING(3),
      allowNull: false
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