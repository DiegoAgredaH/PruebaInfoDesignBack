const express = require("express");
const cors = require('cors');
const app = express();
const { PORT } = require("./config");
const morgan = require("morgan");
const { mysqlConn } = require("./database-MySQL");

//Middleware
app.use(morgan("dev"));
app.use(express.json());

app.use(cors());

//Routes
app.use(require("./routes/routes"));

//Iniciar servidor
app.listen(PORT, "0.0.0.0", function () {
    console.log(`Servidor en puerto ${PORT}`);
});
