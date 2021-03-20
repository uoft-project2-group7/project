const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Goalies extends Model {}

Goalies.init(
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
      allowNull: false,
      defaultValue: 'G'
    },
    wins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    saves: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    goals_against: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    shutouts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'goalies'
  }
);

module.exports = Goalies;