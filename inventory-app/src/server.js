import express from "express";
import dotenv from "dotenv";

import sequelize from "./config/database.js";
import moviesRoutes from "./routes/moviesRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/movies", moviesRoutes);

const port = process.env.INVENTORY_PORT;

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
