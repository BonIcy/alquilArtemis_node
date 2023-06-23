//improtamos el promise
import mysql from "promise-mysql";
//obtenemos los datos de la conexion por medio del config
import config from "./../config.js";

//paso 9, (mitad del paso 9, la otra mitad esta en config.js) creamos la conexion usando el config
let connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
});
//retornar los datos de la conexion para seguirlos usando pero sin hacerlos publicos
let getConnection = () => {
  return connection;
};
export default getConnection;