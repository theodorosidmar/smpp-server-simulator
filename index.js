const SmppServer = require('./src/server')
require('dotenv').config()

const server = new SmppServer()
server.listen()
