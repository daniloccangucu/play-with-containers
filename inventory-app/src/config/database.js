import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

console.log("Database Configuration:");
console.log(`PGDATABASE: ${process.env.PGDATABASE}`);
console.log(`PGUSER: ${process.env.PGUSER}`);
console.log(`PGPASSWORD: ${process.env.PGPASSWORD ? "****" : "Not Provided"}`);
console.log(`PGHOST: ${process.env.PGHOST}`);
console.log(`PGPORT: ${process.env.PGPORT}`);

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: "postgres",
    port: process.env.PGPORT,
    logging: (msg) => console.log(`Sequelize: ${msg}`),
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;
