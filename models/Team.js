const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Team extends Model {}

Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    team_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    center: {
      type: DataTypes.INTEGER,
      references: {
        model: 'player',
        key: 'id'
      }
    },
    right_wing: {
      type: DataTypes.INTEGER,
      references: {
        model: 'player',
        key: 'id'
      }
    },
    left_wing: {
      type: DataTypes.INTEGER,
      references: {
        model: 'player',
        key: 'id'
      }
    },
    dman1: {
      type: DataTypes.INTEGER,
      references: {
        model: 'player',
        key: 'id'
      }
    },
    dman2: {
      type: DataTypes.INTEGER,
      references: {
        model: 'player',
        key: 'id'
      }
    },
    goalie: {
      type: DataTypes.INTEGER,
      references: {
        model: 'player',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: 'team'
  }
);

module.exports = Team;