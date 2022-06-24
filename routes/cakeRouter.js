import { Router } from "express";
import { createCake } from "../controllers/cakeController.js";


const cakeRouter = Router();

cakeRouter.post("/cakes", createCake);



export default cakeRouter;