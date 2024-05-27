const Sequelize = require("sequelize");
const sequelizeConnect = require("../connection/database");

const Transaction = sequelizeConnect.define("transaction", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  account_number: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  amount: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  transaction: {
    type: Sequelize.ENUM("Withdraw", "Deposit", "View"),
    allowNull: false,
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
});

module.exports = Transaction;
