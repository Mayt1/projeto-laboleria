import { Router } from "express";
import { createOrder, getOrders } from "../controllers/orderController.js";

const orderRouter = Router();
orderRouter.post("/order", createOrder);
orderRouter.get("/orders/:id", getOrders)

export default orderRouter;