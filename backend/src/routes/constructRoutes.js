import { Router } from "express";
import { methodsHTTP as constructRoutes } from "../controllers/constructconstructRoutes.controllers.js";

let router = Router();

router.get("/", constructRoutes.getConstruct);

export default router;