import express from "express";

import sequelize from "./config/database.js";
import moviesRoutes from "./routes/moviesRoutes.js";

const app = express();

app.use("/movies", moviesRoutes);

app.get("/hello", (_req, res) => {
  res.send("Hello, world!");
});

const port = 5000;

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
