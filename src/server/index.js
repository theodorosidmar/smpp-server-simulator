const smpp = require('smpp')
const { bindTransceiver, unbind, enquireLink, submitSm, querySm, error } = require('./callbacks')

module.exports = smpp.createServer((session) => {
  session.on('bind_transceiver', bindTransceiver.bind(this, session))
  session.on('unbind', unbind.bind(this, session))
  session.on('enquire_link', enquireLink.bind(this, session))
  session.on('submit_sm', submitSm.bind(this, session))
  session.on('query_sm', querySm.bind(this, session))
  session.on('error', error.bind(this, error))
})
