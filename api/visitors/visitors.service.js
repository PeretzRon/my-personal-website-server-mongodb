const DeviceDetector = require("device-detector-js");
const {saveVisitorDetails, saveResumeDownloadDetails} = require("./visitors.repository");
const {getConfigService} = require("../../services/get-config/get-config.service");

const deviceDetector = new DeviceDetector();

module.exports = {saveVisitorDetailsService, saveResumeDownloadDetailsService};

async function saveVisitorDetailsService(req) {
    try {
        const config = await getConfigService();
        if (config?.saveToDB) {
            const userAgent = req.headers["user-agent"];
            const device = deviceDetector.parse(userAgent);
            device.ip = req.get('X-Real-IP');
            device.date = new Date();
            return await saveVisitorDetails(req, device);
        }
        return 'notInWriteMode';
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

