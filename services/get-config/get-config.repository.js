const db = require("../../services/db");
const {CONFIG_COLLECTION} = require("../../server.config");

module.exports = {getConfigRepository};

async function getConfigRepository() {
    try {
        return await db.getDb()
            .db()
            .collection(CONFIG_COLLECTION)
            .findOne({}, {projection: {_id: 0}});
    } catch (e) {
        throw e;
    }
}
