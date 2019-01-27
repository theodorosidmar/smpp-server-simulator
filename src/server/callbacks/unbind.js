const { log } = require('../../utils/logger')

module.exports = (session, pdu) => {
  log(pdu)
  session.send(pdu.response())
  session.close()
}
