const Sequelize = require("sequelize");
const dotenv = require("dotenv");
const mysql2 = require("mysql2");

dotenv.config();

const sequelizeConnect = new Sequelize({
  dialect: "mysql",
  dialectModule: mysql2,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

module.exports = sequelizeConnect;
