const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres://@localhost:5432/pokedex", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;