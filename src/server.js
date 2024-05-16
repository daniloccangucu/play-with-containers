import express from "express";
import moviesRoutes from "./routes/moviesRoutes.js";

const app = express();

app.use("/movies", moviesRoutes);

app.get("/hello", (_req, res) => {
  res.send("Hello, world!");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
