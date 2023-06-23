import getConnection from "../db/database.js";//paso 7, importamos la conexion hecha en la database
//usamos async para que el codigo se ejecute de manera asincrona al momento de generar un response
let getEmployees = async (req, res) => {
  try {
    let connection = await getConnection();
    let result = await connection.query(
      "SELECT id_empleado, nombre_empleado, email_empleado, celular_empleado, password_empleado FROM empleados"
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export let methodsHTTP = {
  getEmployees,
};