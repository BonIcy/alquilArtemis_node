//paso 9(otra mitad del paso 9, la primera esta en database.js)obtenemos los datos del env y habilitamos su lectura  y los "encriptamos" para evitar que sean publicos
import {config} from "dotenv";
config();

//ocultamos los datos del archivo .env
export default {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
}