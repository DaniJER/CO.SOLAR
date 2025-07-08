const { Pool } = require("pg");

const config = {
  user: "postgres",
  host: "localhost",
  password: "postgres",
  database: "cosolar",
  port: 5433,
};

const pool = new Pool(config);

module.exports = pool;
