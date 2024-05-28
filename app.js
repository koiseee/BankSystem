const express = require("express");
const sequelizeConnect = require("./connection/database");
const { Sequelize } = require("sequelize");
const routes = require("./routes/main-route");

const app = express();

app.use(routes);

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
