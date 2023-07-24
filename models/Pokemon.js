const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Pokemon = db.define("Pokemon", {
  name: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
  trainer: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
  },
  image: {
    type: DataTypes.STRING,
  },
  TrainerId: {
    type: DataTypes.INTEGER,
  }
}, {
  timestamps: false,
});

module.exports = Pokemon;

const Trainer = require("./Trainer");

Pokemon.belongsTo(Trainer);