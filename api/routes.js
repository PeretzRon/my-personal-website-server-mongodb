const express = require('express');
const router = express.Router();
const visitorsRoute = require('./visitors/visitors.route');

const routes = () => {

    /*  APPLICATION API  */
    router.use('/', visitorsRoute);
    /*  APPLICATION API  */

    return router;
};

module.exports = routes;
