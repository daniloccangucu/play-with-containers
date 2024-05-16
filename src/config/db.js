import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

export const pool = new pg.Pool({
  user: process.env.PGUSER,
  // uncomment the following line to use a local database
  // password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
});

console.log("database:", process.env.PGDATABASE);
console.log("host:", process.env.PGHOST);
console.log("port:", process.env.PGPORT);