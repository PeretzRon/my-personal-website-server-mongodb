const express = require('express');
const router = express.Router();
const {saveVisitorDetailsService, saveResumeDownloadDetailsService} = require('./visitors.service');

router.put('/incSiteVisitors', async (req, res) => {
    try {
        const result = await saveVisitorDetailsService(req);
        res.status(201).json({error: null, data: result});
    } catch (e) {
        console.log(e.message);
        res.status(500).json({error: e.message, data: null});
    }
});

router.put('/resumeDownload', async (req, res) => {
    try {
        const result = await saveResumeDownloadDetailsService(req);
        res.status(201).json({error: null, data: result});
    } catch (e) {
        console.log(e.message);
        res.status(500).json({error: e.message, data: null});
    }
});

module.exports = router;
