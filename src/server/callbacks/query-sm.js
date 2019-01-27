const { log } = require('../../utils/logger')

module.exports = (session, pdu) => {
  log(pdu)
  session.send(pdu.response({
    message_id: pdu.message_id.toString(),
    final_date: new Date(),
    message_state: 2
  }))
}
