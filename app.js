const express = require('express');
const cors = require('cors');
const indexRouter = require('./routes/index');
const app = express();
const http = require('http');
const db = require("./db");

const port = 5000;

app.set('port', port);

app.use(cors());

app.use('/', indexRouter);
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
