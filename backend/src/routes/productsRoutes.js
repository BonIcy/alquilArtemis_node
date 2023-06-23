import { Router } from "express";
import { methodsHTTP as productRoutes } from "../controllers/products.controllers.js";

let router = Router();

router.get("/", productRoutes.getProducts);

export default router;