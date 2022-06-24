import { Router } from "express";
import cakeRouter from "./cakeRouter.js"
import clientsRouter from "./clientRouter.js";



const routes = Router();
routes.use(cakeRouter);
routes.use(clientsRouter);




export default routes;