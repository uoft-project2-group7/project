const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TeamPlayers extends Model {}

TeamPlayers.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    team_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'team',
        key: 'id'
      }
    },
    player_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'player',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'team_players'
  }
);

module.exports = TeamPlayers;