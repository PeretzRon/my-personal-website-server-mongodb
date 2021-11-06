const NodeCache = require("node-cache");

const cache = new NodeCache({stdTTL: 100, useClones: false});

module.exports = cache;
