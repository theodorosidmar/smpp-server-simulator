exports.log = (log) => console.log(`[${new Date()}] - ${JSON.stringify(log)}`)
exports.logError = (log) => console.error(`[${new Date()}] - ${JSON.stringify(log)}`)
exports.logWarn = (log) => console.warn(`[${new Date()}] - ${JSON.stringify(log)}`)
