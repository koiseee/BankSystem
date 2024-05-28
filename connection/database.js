const Sequelize = require("sequelize");
const mysql2 = require("mysql2"); // Import mysql2 with promise support
const dotenv = require("dotenv");

dotenv.config();

const sequelizeConnect = new Sequelize({
  dialect: "mysql",
  dialectModule: mysql2, // Use mysql2 as the dialectModule
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

module.exports = sequelizeConnect;
