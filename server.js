const express = require('express');
const path = require('path');
const app = express();
const {sequelize} = require('./models');
const {rootRouter} = require('./app/routers/root.router.js');
app.use(express.json());

const publicPathDirectory = path.join(__dirname, "./app/public");

app.use("/app/public", express.static(publicPathDirectory));

app.use(rootRouter);
const port = 3456;

app.listen(port, async () => {
    console.log("App listening on http://localhost:" + port);
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
    
  });
  