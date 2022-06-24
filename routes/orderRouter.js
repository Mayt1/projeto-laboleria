import { Router } from "express";
import { createOrder, getAllOrders, getOrders } from "../controllers/orderController.js";

const orderRouter = Router();
orderRouter.post("/order", createOrder);
orderRouter.get("/orders/:id", getOrders)
orderRouter.get("/orders", getAllOrders)

export default orderRouter;