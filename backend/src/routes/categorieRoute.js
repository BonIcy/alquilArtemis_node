//paso 5, importamos el Router del framework express
import { Router } from "express";
//paso 6, importamos el controlador (podemos importarlo y crearlo inmediatamente para ir porbando)
import {methodsHTTP as categorieController} from "../controllers/categorie.controllers.js";

//paso 8 (el 7 es hacer el controlador) ponemos el router en variable exportarlo y usarlo
let router = Router();

//establecemos la obtencion de la ruta
router.get("/", categorieController.getCategories);

export default router;