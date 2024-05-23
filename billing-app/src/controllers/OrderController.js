import Order from "../models/order.js";

export const createOrder = async (orderFromPost) => {
  try {
    const { user_id, number_of_items, total_amount } = orderFromPost;
    await Order.create({
      user_id,
      number_of_items,
      total_amount,
    });
  } catch (error) {
    console.error("Error creating order:", error);
  }
};
