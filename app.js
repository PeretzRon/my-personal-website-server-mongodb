require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./api/routes');
const app = express();
const http = require('http');
const db = require("./services/db");
const port = 5000;

app.set('port', port);

app.use(cors());
const router = routes();
app.use('/', router);
const server = http.createServer(app);

db.initDb((err, db) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`server listening to port: ${port}`);
        server.listen(port, '0.0.0.0');
    }
});

module.exports = app;
