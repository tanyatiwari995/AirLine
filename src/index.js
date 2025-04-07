const express = require("express");
const { ServerConfig } = require("./config/index.js");
const apiRoutes = require("./routes/index.js");
const initMySQL = require("./db/db.js"); 
const db = require("./models");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

initMySQL().then(() => {
  db.sequelize
    .sync({ alter: true })
    .then(() => {
      console.log("✅ Sequelize synced");
    })
    .catch((err) => {
      console.error("❌ Sequelize error", err);
    });

  app.listen(ServerConfig.PORT, () => {
    console.log(`🚀 Server is running on ${ServerConfig.PORT}`);
  });
});
