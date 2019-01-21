const server = require('./src/server')
const log = require('./src/logger')
const port = process.env.PORT || 2775

server.listen(port, () => log(`SMPP Server listening on ${port}`))
