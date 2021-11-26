const express = require('express');
const router = express.Router();
const visitorsRoute = require('./visitors/visitors.route');

const routes = () => {

    router.get('/health', (req, res) => {
        res.status(200).send('OK');
    });

    /*  APPLICATION API  */
    router.use('/', visitorsRoute);
    /*  APPLICATION API  */

    return router;
};

module.exports = routes;
