import { Router } from "express";
import { createOrder, getAllOrders, getClientOrders, getOrders } from "../controllers/orderController.js";

const orderRouter = Router();
orderRouter.post("/order", createOrder);
orderRouter.get("/orders/:id", getOrders)
orderRouter.get("/orders", getAllOrders)
orderRouter.get("/client/:id/orders", getClientOrders)

export default orderRouter;