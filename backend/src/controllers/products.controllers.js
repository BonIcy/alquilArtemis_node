import getConnection from "../db/database.js";//paso 7, importamos la conexion hecha en la database
//usamos async para que el codigo se ejecute de manera asincrona al momento de generar un response
let getProducts = async (req, res) => {
  try {
    let connection = await getConnection();
    let result = await connection.query(
      "SELECT id_producto, nombre_producto, precio_x_dia, stock_producto, categorias.nombre_categoria FROM productos INNER JOIN categorias ON productos.categoria_producto = categorias.id_categoria;"
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export let methodsHTTP = {
  getProducts,
};