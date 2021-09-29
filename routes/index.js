const express = require('express');
const db = require("../db");
const router = express.Router();
const DeviceDetector = require("device-detector-js");
const NodeCache = require("node-cache");

const deviceDetector = new DeviceDetector();
const cache = new NodeCache({stdTTL: 100, useClones: false}); // after 100 sec cache will delete

router.put('/incSiteVisitors', async (req, res) => {
    if (cache.get(req.ip)) return;
    const userAgent = req.headers["user-agent"];
    const device = deviceDetector.parse(userAgent);
    device.ip = req.get('X-Real-IP');
    device.date = new Date();
    cache.set(req.ip, req.ip);
    await db.getDb()
        .db()
        .collection('visitors')
        .insertOne(device);
    res.status(204).end();
});

router.put('/resumeDownload', async (req, res) => {
    const details = {
        date: new Date(),
        ip: req.get('X-Real-IP')
    };
    await db.getDb()
        .db()
        .collection('resumeDownload')
        .insertOne(details);
    res.status(204).end();
});

router.use('*', (req, res) => {
    res.send(500).end();
});

module.exports = router;
