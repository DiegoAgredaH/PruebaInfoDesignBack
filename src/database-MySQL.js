const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = require("./config");
var mysql = require("mysql");

//Configuración
var mysqlConn = mysql.createConnection({
  host: DB_HOST,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
});

//Conexión
mysqlConn.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Conexión a DB MYSQL exitosa");
  }
});

//Exportación
module.exports = mysqlConn;
