const path = require("path");
const mysql = require("mysql2/promise");
// const config = require("../config/config.json");

// Correct path to config.json inside src/config/
const configPath = path.join(__dirname, "../config/config.json");

console.log("Loading config from:", configPath);
// Debugging

const config = require(configPath); // Load config.json
const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

console.log("dbConfig------------------", dbConfig);

const initMySQL = async () => {
  try {
    console.log("dbConfig.database is ----------", dbConfig.database);

    const connection = await mysql.createConnection({
      host: dbConfig.host,
      user: dbConfig.username,
      password: dbConfig.password,
    });
    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\`;`
    );
    await connection.end();

    const dbWithDatabase = await mysql.createConnection({
      host: dbConfig.host,
      user: dbConfig.username,
      password: dbConfig.password,
      database: dbConfig.database,
    });

    console.log(`✅ Connected to '${dbConfig.database}' database`);

    return dbWithDatabase;
  } catch (error) {
    console.error(error);
  }
};


module.exports = initMySQL;
