const smpp = require('smpp')
const log = require('./helpers/logger')

class Server {
  constructor () {
    this.port = process.env.PORT || 2775
    this.server = smpp.createServer((session) => {
      session.on('bind_transceiver', (pdu) => {
        log(pdu)
        session.send(pdu.response())
      })
    
      session.on('unbind', (pdu) => {
        log(pdu)
        session.send(pdu.response())
        session.close()
      })
    
      session.on('enquire_link', (pdu) => {
        log(pdu)
        session.send(pdu.response())
      })
    
      session.on('submit_sm', (pdu) => {
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
      })
    
      session.on('query_sm', (pdu) => {
        log(pdu)
        session.send(pdu.response({
          message_id: pdu.message_id.toString(),
          final_date: new Date(),
          message_state: 2
        }))
      })

      session.on('error', (error) => {
        log(error)
        session.close()
      })
    })
  }

  listen () {
    this.server.listen(this.port, () => console.log(`SMPP Server listening on ${this.port}`))
  }
}

module.exports = Server
