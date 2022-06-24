import { Router } from "express";
import cakeRouter from "./cakeRouter.js"



const routes = Router();
routes.use(cakeRouter);




export default routes;