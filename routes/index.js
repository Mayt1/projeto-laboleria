import { Router } from "express";
import cakeRouter from "./cakeRouter.js"
import clientsRouter from "./clientRouter.js";
import orderRouter from "./orderRouter.js";



const routes = Router();
routes.use(cakeRouter);
routes.use(clientsRouter);
routes.use(orderRouter);



export default routes;