import express from "express";
import dotenv from "dotenv";

import { connectToRabbitMQ } from "./config/rabbitmq.js";

dotenv.config();

const app = express();
const PORT = process.env.BILLING_PORT;

app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).send("OK");
});

connectToRabbitMQ()
  .then(() => {
    console.log("Connected to RabbitMQ");
  })
  .catch((err) => {
    console.error("Failed to connect to RabbitMQ, proceeding without it:", err);
  })
  .finally(() => {
    app.listen(PORT, () => {
      console.log(`Billing API is running on port ${PORT}`);
      console.log(`Access within Docker network: http://billing-app:${PORT}`);
      console.log(
        `Health check available at: http://billing-app:${PORT}/health`
      );
    });
  })
  .catch((error) => {
    console.error("Failed to start Billing API server:", error);
  });
