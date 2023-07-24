const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Trainer = db.define("Trainer", {
  name: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false,
});

module.exports = Trainer;

const Pokemon = require("./Pokemon");

Trainer.hasMany(Pokemon);