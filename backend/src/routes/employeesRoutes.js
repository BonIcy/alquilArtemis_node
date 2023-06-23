import { Router } from "express";
import { methodsHTTP as employeesRoutes } from "../controllers/employees.controllers.js";

let router = Router();

router.get("/", employeesRoutes.getEmployees);

export default router;