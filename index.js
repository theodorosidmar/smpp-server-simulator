const server = require('./src/server')
const { log, logWarn } = require('./src/utils/logger')
const port = process.env.PORT || 2775

server.listen(port, () => log(`SMPP Server listening on ${port}`))

// Graceful shutdown
const SIGNALS = {
  SIGINT: 2,
  SIGTERM: 15
}

const shutdownHandler = (signal) => {
  return () => {
    logWarn(`Gracefully shutting down the process: #${process.pid}. Exited by signal ${signal}`)
    server.close()
  }
}

Object.keys(SIGNALS).forEach(signal => process.on(signal, shutdownHandler(signal)))
