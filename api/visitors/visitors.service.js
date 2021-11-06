const DeviceDetector = require("device-detector-js");
const {saveVisitorDetails, saveResumeDownloadDetails} = require("./visitors.repository");

const deviceDetector = new DeviceDetector();

module.exports = {saveVisitorDetailsService, saveResumeDownloadDetailsService};

async function saveVisitorDetailsService(req) {
    try {
        const userAgent = req.headers["user-agent"];
        const device = deviceDetector.parse(userAgent);
        device.ip = req.get('X-Real-IP');
        device.date = new Date();
        return await saveVisitorDetails(req, device);
    } catch (e) {
        throw e;
    }
}

async function saveResumeDownloadDetailsService(req) {
    try {
        const details = {
            date: new Date(),
            ip: req.get('X-Real-IP')
        };
        return await saveResumeDownloadDetails(req, details);
    } catch (e) {
        throw e;
    }
}

