//instalamos dependencias dentro de backend, el framework express, nodemon
import app from "./app.js";
//paso 0 (lo inicial y basico)
//creamos e iniciamos nuestra variable main que da funcionamiento a todo
let main = () => {
    //con Listen le indicamos que obtenga el puerto
    app.listen(app.get("port"));
  };
  
  main();