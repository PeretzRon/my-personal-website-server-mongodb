const {getConfigRepository} = require("./get-config.repository");

module.exports = {getConfigService};

async function getConfigService() {
    try {
        return await getConfigRepository();
    } catch (e) {
        throw e;
    }
}
