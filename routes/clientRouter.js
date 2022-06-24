import { Router } from "express";
import { createClient } from "../controllers/clientController.js";


const clientsRouter = Router();

clientsRouter.post("/clients", createClient);

export default clientsRouter;