const { log } = require('../../utils/logger')

module.exports = (session, pdu) => {
  log(pdu)
  const messageId = Math.floor(new Date()).toString().substring(4)
  session.send(pdu.response({ message_id: messageId }))
  setTimeout(() => {
    session.deliver_sm({
      esm_class: 4,
      receipted_message_id: messageId,
      message_state: Math.random() <= 0.1 ? 5 : 2
    })
  }, 2000)
}
