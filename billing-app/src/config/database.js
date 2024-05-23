import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.PG_2_DATABASE,
  process.env.PG_2_USER,
  process.env.PG_2_PASSWORD,
  {
    host: process.env.PGHOST,
    dialect: "postgres",
    port: process.env.PGPORT,
  }
);

export default sequelize;
