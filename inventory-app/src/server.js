import express from "express";
import dotenv from "dotenv";

import sequelize from "./config/database.js";
import moviesRoutes from "./routes/moviesRoutes.js";

dotenv.config();

console.log("Starting Inventory App...");

const app = express();

app.use(express.json());

app.use("/movies", moviesRoutes);

app.get("/health", (_req, res) => {
  res.status(200).send("OK");
});

const port = process.env.INVENTORY_PORT;

console.log("Attempting to synchronize the database...");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronization successful");
    app.listen(port, () => {
      console.log(`Inventory app is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
