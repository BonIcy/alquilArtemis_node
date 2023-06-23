//paso 7, importamos la conexion hecha en la database
import getConnection from "../db/database.js";
//usamos async para que el codigo se ejecute de manera asincrona al momento de generar un response
let getConstruct = async (req, res) => {
  try {
    let connection = await getConnection();
    let result = await connection.query(
      "SELECT id_constructora, nombre_constructora, nombre_representante, email_contacto, telefono_contacto FROM constructoras"
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
// exportamos los metodos para usarlos en las rutas
export let methodsHTTP = {
  getConstruct,
};