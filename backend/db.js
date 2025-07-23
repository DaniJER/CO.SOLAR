import { Pool } from "pg";

const config = {
  user: "postgres",
  host: "localhost",
  password: "postgres",
  database: "cosolar",
  port: 5433,
};

const pool = new Pool(config);

export default {
  query: (text, params) => pool.query(text, params),
};
