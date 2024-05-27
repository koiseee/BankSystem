const express = require("express");
const sequelizeConnect = require("./connection/database")
const { Sequelize } = require("sequelize");

const app = express();

sequelizeConnect
  .sync({
    // force: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started @ PORT ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

const port = process.env.PORT;