const Sequelize = require("sequelize");
const sequelizeConnect = require("../connection/database");

const Account = sequelizeConnect.define("account", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  user_id: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  account_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  balance: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
});

module.exports = Account;
