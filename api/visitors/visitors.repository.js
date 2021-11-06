const {VISITORS_COLLECTION, RESUME_DOWNLOAD_COLLECTION} = require("../../server.config");
const db = require("../../services/db");

module.exports = {saveVisitorDetails, saveResumeDownloadDetails};

async function saveVisitorDetails(req, device) {
    try {
        return await db.getDb()
            .db()
            .collection(VISITORS_COLLECTION)
            .insertOne(device);
    } catch (e) {
        throw e;
    }
}

async function saveResumeDownloadDetails(req, details) {
    try {
        return await db.getDb()
            .db()
            .collection(RESUME_DOWNLOAD_COLLECTION)
            .insertOne(details);
    } catch (e) {
        throw e;
    }
}

