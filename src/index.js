const express = require("express");
const app = express();
const port = 4000;
const morgan = require("morgan");
const { mysqlConn } = require("./database-MySQL");

//Middleware
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use(require("./routes/routes"));

//Iniciar servidor
app.listen(port, "0.0.0.0", function () {
    console.log(`Servidor en puerto ${port}`);
});
