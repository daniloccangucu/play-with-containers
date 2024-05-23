import amqp from "amqplib";
import { createOrder } from "../controllers/OrderController.js";

let channel;

export async function connectToRabbitMQ() {
  try {
    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    channel = await connection.createChannel();

    const queue = process.env.RABBITMQ_QUEUE;
    await channel.assertQueue(queue, { durable: true });

    channel.consume(
      queue,
      async (msg) => {
        try {
          const orderData = JSON.parse(msg.content.toString());
          await createOrder(orderData);

          channel.ack(msg);
          console.log("Order processed:", orderData);
        } catch (error) {
          console.error("Error processing order:", error);
          channel.reject(msg, false);
        }
      },
      { noAck: false }
    );

    console.log("Connected to RabbitMQ");
  } catch (error) {
    console.error("Error connecting to RabbitMQ:", error);
    throw error;
  }
}
