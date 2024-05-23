import express from "express";
import dotenv from "dotenv";

import sequelize from "./config/database.js";
import moviesRoutes from "./routes/moviesRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/movies", moviesRoutes);

app.get("/health", (_req, res) => {
  res.status(200).send("OK");
});

const port = process.env.INVENTORY_PORT;

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Inventory app is running on port ${port}`);
      console.log(
        `Access within Docker network: http://inventory-app:${port}/movies`
      );
      console.log(
        `Health check available at: http://inventory-app:${port}/health`
      );
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
