//paso 1, importamos express luego de su instalacion
import express from "express";

//paso 3, importamos todo lo que hay un rutas y lo empleamos en el app
import categorieRoutes from "./routes/categorieRoute.js";
import productRoutes from "./routes/productsRoutes.js";
import employeesRoutes from "./routes/employeesRoutes.js";
import constructRoutes from "./routes/constructRoutes.js";

//paso 2, definir a express como una variable y colocarle un puerto
let app = express();
app.set("port", 5002);

//paso 4,establecemos las rutas que usará nuestro express, categorias, productos, etc (aca usé copy paste, lo siento trainer)
app.use("/api/categories", categorieRoutes);
app.use("/api/products", productRoutes);
app.use("/api/employees", employeesRoutes);
app.use("/api/construct", constructRoutes);
export default app;