//paso 7, importamos la conexion hecha en la database
import getConnection from "./../db/database.js";

//usamos async para que el codigo se ejecute de manera asincrona al momento de generar un response
let getCategories = async (req, res) => {
  try {
    let connection = await getConnection();
    let result = await connection.query(// consulta de datos dentro de la tabla categorias, usamos query por el promise-mysql
      "SELECT id_categoria, nombre_categoria, descripcion_categoria FROM categorias"
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500); //usamos el 500 porque en ese rango estan los errores de conexion
    res.send(error.message);
  }
};

// exportamos los metodos para usarlos en las rutas
export let methodsHTTP = {
  getCategories,
};