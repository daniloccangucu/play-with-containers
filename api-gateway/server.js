import express from "express";
import pkg from "body-parser";
import routes from "./routes.js";
import dotenv from "dotenv";
import proxy from "./proxy.js";

dotenv.config();

const { json } = pkg;

const app = express();
const PORT = process.env.GATEWAY_PORT;
const INVENTORY_API_URL = process.env.INVENTORY_API_URL;

app.use(json());

app.use("/api/movies", proxy);
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
  console.log(`API Gateway is accessible at http://localhost:${PORT}`);
  console.log(`The Inventory API is proxied from ${INVENTORY_API_URL}`);
});
