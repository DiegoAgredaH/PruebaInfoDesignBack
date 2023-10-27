const { PORT } = require('./config');

const express = require('express');
const app = express();
const morgan = require('morgan');
const { mysqlConn } = require('./database-MySQL');

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/routes'));

//Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});