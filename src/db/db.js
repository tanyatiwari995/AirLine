const path = require("path");
const mysql = require("mysql2");

// Correct path to config.json inside src/config/
const configPath = path.join(__dirname, "../config/config.json"); 

console.log("Loading config from:", configPath); // Debugging

const config = require(configPath); // Load config.json
const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log(`Connected to MySQL (${env}) database!`);
});

module.exports = connection;

